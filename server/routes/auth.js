import {login, logout} from "../controller/auth.js"
import express from "express";
import passport from "passport";
import LocalStrategy from "passport-local";
import { verifyPassword } from "../../src/model/User.js";
const router = express.Router();
passport.use(
  new LocalStrategy(async function (username, password, done) {
    const user = await verifyPassword(username, password);
    if (!user) {
      return done(null, false);
    } else {
      return done(null, user);
    }
  })
);

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

router.post("/login", passport.authenticate("local"), login);

router.post("/logout", logout);

router.get("/", (req, res) => {
  //artificially slowing down this request to see loading screen
  setTimeout(() => {
    if (req.user) res.send(req.user);
    else res.sendStatus(401);
  }, 2000);
});

export default router;
