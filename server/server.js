import express from "express";
import dotenv from "dotenv";
import adminRouter from "./routes/admin.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();

// Parses 'body' content to be handled by your server
app.use(express.json());

app.use("/admin", adminRouter);

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
