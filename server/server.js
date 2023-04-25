import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import adminRouter from "./routes/admin.js";
import clientRouter from "./routes/client.js";
import storeRouter from "./routes/store.js";
import userRouter from "./routes/user.js";

dotenv.config();

const app = express();

app.use(cors());
// // Parses 'body' content to be handled by your server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(clientRouter);
app.use("/admin", adminRouter);
app.use("/store", storeRouter);
app.use("/user", userRouter);
try {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.agdr7nu.mongodb.net/?retryWrites=true&w=majority`
  );
} catch (error) {
  console.log("Error: ", error.message);
}

app.listen(process.env.PORT, () => {
  console.log("App listening on port: " + process.env.PORT);
});
