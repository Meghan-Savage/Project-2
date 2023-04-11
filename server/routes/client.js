import express from "express";

import {
  displayProducts,
  clientProfile,
  createClientProfile,
} from "../controller/client.js";

const clientRouter = express.Router();

clientRouter.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});

clientRouter.get("/favorites", (req, res) => {
  res.send("<h1>favorites</h1>");
});

clientRouter.get("/products", displayProducts);

clientRouter.get("/products/:storeId", displayProducts);

clientRouter.get("/products/compare/:storeIdOne/:storeIdTwo", displayProducts);

clientRouter.get("/profile/:clientId", clientProfile);

clientRouter.post("/profile/:clientId", createClientProfile);

clientRouter.put("/profile/:clientId", (req, res) => {
  res.send("<h1>replace all information in client profile</h1>");
});

clientRouter.patch("/profile/:clientId", (req, res) => {
  res.send("<h1>update client profile</h1>");
});

clientRouter.delete("/profile/:clientId", (req, res) => {
  res.send("<h1>delete client profile</h1>");
});

clientRouter.patch("/cart/:clientId/:productId", (req, res) => {
  res.send("<h1>client cart</h1>");
});

clientRouter.delete("/favorites/:clientId/:productId", (req, res) => {
  res.send("<h1>client favorites</h1>");
});
