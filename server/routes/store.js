import express from "express";
import {
  createStore,
  deleteStore,
  findOneStoreByTitle,
  listStores as listStores,
  updateStore,
  findStoreById,
  listStoresByUserId,
} from "../models/store.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const newStore = req.body;
  try {
    const createdStore = await createStore(newStore);
    res.send(`Success, added ${createdStore.name} - ${createdStore.id}`);
  } catch (error) {
    res.status(403).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const allStores = await listStores();
    res.send(allStores);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id", id);
    const anStore = await findStoreById(id);
    res.send(anStore);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const newStore = req.body;
  try {
    const updatedStore = await updateStore(id, newStore);
    res.send(updatedStore);
  } catch (error) {
    res.status(403).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedStore = await deleteStore(id);
    res.send(deletedStore);
  } catch (error) {
    res.status(403).send(error.message);
  }
});

router.get("/title/:title", async (req, res) => {
  const title = req.params.title;
  console.log("title", title);
  try {
    const anStore = await findOneStoreByTitle(title);
    res.send(anStore);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/user/:userId", async (req, res) => {
  const userID = req.params.userId;
  try {
    const Stores = await listStoresByUserId(userID);
    res.send(Stores);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

export default router;
