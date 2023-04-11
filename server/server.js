import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import adminRouter from "./routes/admin.js";

dotenv.config();

const app = express();

// Cross-origin resource sharing, allows front end to get info from backend
app.use(cors());

// Parses 'body' content to be handled by your server
app.use(express.json());

app.use("/admin", adminRouter);

app.listen(process.env.PORT, () => {
  console.log("App listening on port: " + process.env.PORT);
});
