import express from "express";

// custom controllers
import {
  putProduct,
  deleteProduct,
  patchProduct,
  addProduct,
  getProduct,
} from "../controller/admin.js";

const adminRouter = express.Router();

adminRouter.get("/get-product/:id", getProduct);

adminRouter.post("/delete-product", deleteProduct);

adminRouter.post("/add-product", addProduct);

// adminRouter.put("/add-product/replace/:id", putProduct);

// adminRouter.patch("/add-product/:id", patchProduct);

export default adminRouter;
