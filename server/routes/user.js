import express from "express";
import {
  createUser,
  deleteUser,
  listUsers,
  updateUser,
  findUserById,
  findOneUserByName,
} from "../models/user.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const newUser = req.body;
  try {
    const id = await createUser(newUser);
    res.send(`Success, added ${newUser.userName} - ${id}`);
  } catch (error) {
    res.status(403).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const allUsers = await listUsers();
    res.send(allUsers);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const User = await findUserById(id);
    res.send(User);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const newUser = req.body;
  try {
    const updatedUser = await updateUser(id, newUser);
    res.send(updatedUser);
  } catch (error) {
    res.status(403).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedUser = await deleteUser(id);
    res.send(deletedUser);
  } catch (error) {
    res.status(403).send(error.message);
  }
});

router.get("/name/:name", async (req, res) => {
  const name = req.params.name;
  try {
    const User = await findOneUserByName(name);
    res.send(User);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

export default router;
