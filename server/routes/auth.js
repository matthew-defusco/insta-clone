import { Router } from "express";
import { loginSchema, signupSchema } from "../validation/schemas.js";
import { User } from "../models/user.js";
// import { login } from "../utils/login.js";
import { login, logout } from "../utils/index.js";
import { sessionizeUser } from "../utils/helpers.js";

const router = Router();

router.post("/api/signup", async (req, res, next) => {
  const { error } = signupSchema.validate(req.body);

  if (error) {
    res.status(400).json({ message: "Sorry, that failed the validation." });
    return;
  }

  try {
    const { email, username, fullName, password } = req.body;

    const existingUser = await User.exists({ email });

    if (existingUser) {
      return next(new Error("That user already exists"));
    }

    const user = await User.create({ email, username, fullName, password });

    login(req, user);

    const sessionUser = sessionizeUser(user);

    res.send(sessionUser);
  } catch (err) {
    // console.log(err);
    next(err);
  }
});

router.post("/api/logout", async (req, res, next) => {
  try {
    await logout(req, res);
    res.json({ message: "OK" });
  } catch (error) {
    next(error);
  }
});

router.post("api/login", async (req, res, next) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) {
      res.status(400).json({ message: "Sorry, that input didn't work :(" });
      return;
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.matchesPassword(password))) {
      throw new Error("Unauthorized!!");
    }

    login(req, user);

    res.json({ message: "Logged in!", user: req.session.user });
  } catch (error) {
    next(error);
  }
});

export default router;
