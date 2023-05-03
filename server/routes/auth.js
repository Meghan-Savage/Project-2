import express from "express";
import { register, login } from "../controller/auth.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello , this is auth endpoint");
});

router.get("/register", (req, res) => {
  res.send("Hello , you are registering");
});

router.get("/login", (req, res) => {
  res.send("Hello , you are logging in");
});

router.post("/register", register);
router.post("/login", login);

export default router;