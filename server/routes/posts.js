import { Router } from "express";
import sharp from "sharp";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import { Post } from "../models/post.js";
import { User } from "../models/user.js";
import { upload, randomImageName } from "../utils/index.js";
import { auth } from "../middleware/auth.js";

const bucketName = process.env.S3_BUCKET_NAME;
const bucketRegion = process.env.S3_BUCKET_REGION;

const router = Router();

const s3 = new S3Client({
  region: bucketRegion,
});

// Get posts for a specific user
router.get("/api/posts/:userId", auth, async (req, res) => {
  const { posts } = await User.findById(req.params.userId)
    .lean()
    // .populate("posts", "imageName -_id -creator");
    .populate("posts");

  for (const post of posts) {
    const getObjectParams = {
      Bucket: bucketName,
      Key: post.imageName,
    };

    const command = new GetObjectCommand(getObjectParams);
    const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
    post.imageUrl = url;
  }

  res.json({ posts });
});

// Get all posts for feed
router.get("/api/posts", auth, async (req, res) => {
  const posts = await Post.find({}, "-__v -_id -updatedAt ").lean();

  for (const post of posts) {
    const getObjectParams = {
      Bucket: bucketName,
      Key: post.imageName,
    };

    const command = new GetObjectCommand(getObjectParams);
    const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
    post.imageUrl = url;
  }

  res.json({ posts });
});

// Create a post
router.post("/api/posts", auth, upload.single("image"), async (req, res) => {
  const image = req.file.buffer;
  const caption = req.body.caption;
  const imageName = randomImageName();

  const putObjectParams = {
    Bucket: bucketName,
    Key: imageName,
    Body: image,
    ContentType: req.file.mimetype,
  };

  const command = new PutObjectCommand(putObjectParams);

  try {
    await s3.send(command);
    const postDoc = {
      creator: req.session.user.userId,
      imageName,
      caption,
      comments: [],
    };

    await Post.create(postDoc);

    res.json({ message: "OK", post: postDoc });
  } catch (error) {
    console.log(error);
  }
});

// Like a post
router.put("/api/posts/:postId", auth, async (req, res) => {
  const userId = req.session.user.userId;
  const postId = req.params.postId;

  const post = await Post.findById(postId);
  const user = await User.findById(userId);

  if (post.likedBy.includes(userId)) {
    post.likes -= 1;
    const postIndex = post.likedBy.indexOf(user._id);
    post.likedBy.splice(postIndex, 1);
    const userIndex = user.likedPosts.indexOf(post._id);
    user.likedPosts.splice(userIndex, 1);
  } else {
    post.likes += 1;
    post.likedBy.push(userId);
    user.likedPosts.push(postId);
  }

  await post.save();
  await user.save();

  res.json({ message: "OK", user, post });
});

export default router;
