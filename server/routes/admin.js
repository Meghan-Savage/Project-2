import express from "express";

// custom controllers
import {
  displayProducts,
  putProduct,
  deleteProduct,
  patchProduct,
  addProduct,
  getProduct,
} from "../controller/admin.js";

const adminRouter = express.Router();

adminRouter.delete("/add-product/delete/:id", deleteProduct);

adminRouter.put("/add-product/replace/:id", putProduct);

adminRouter.patch("/add-product/:id", patchProduct);

adminRouter.post("/add-product", addProduct);

// data logic stored for access from react router
adminRouter.get("/add-product", displayProducts);

adminRouter.get("/get-product/:id", getProduct);

export default adminRouter;
