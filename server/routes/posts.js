import { Router } from "express";
import { upload } from "../utils/upload.js";
import { auth } from "../middleware/auth.js";

const router = Router();

router.post("/api/posts", auth, upload.single("image"), async (req, res) => {
  console.log("req.file", req.file);
  console.log("req.body.caption", req.body.caption);
  res.json({ message: "OK" });
});

export default router;
