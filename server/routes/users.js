import express from "express";
import User from "../model/User.js";
import {updateUser, deleteUser, getUser, getUsers} from "../controller/user.js"

const router = express.Router();

router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.get("/:id", getUser)
router.get("/", getUsers)

export default router;