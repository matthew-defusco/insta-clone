import { Router } from "express";
import sharp from "sharp";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { upload, randomImageName } from "../utils/index.js";
import { auth } from "../middleware/auth.js";

const bucketName = process.env.S3_BUCKET_NAME;
const bucketRegion = process.env.S3_BUCKET_REGION;

const router = Router();

const s3 = new S3Client({
  region: bucketRegion,
});

router.post("/api/posts", auth, upload.single("image"), async (req, res) => {
  console.log("req.file", req.file);
  console.log("req.body.caption", req.body.caption);
  const image = req.file.buffer;

  const resizedImage = await sharp(image)
    .resize({ height: 1920, width: 1080, fit: "contain" })
    .toBuffer();

  const imageName = randomImageName();

  const putObjectParams = {
    Bucket: bucketName,
    Key: imageName,
    Body: resizedImage,
    ContentType: req.file.mimetype,
  };

  const command = new PutObjectCommand(putObjectParams);

  await s3.send(command);

  res.json({ message: "OK" });
});

export default router;
