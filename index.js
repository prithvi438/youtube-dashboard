import dotenv from "dotenv";
import connectDB from "./db.js";
import app from "./app.js";

dotenv.config();

app.listen(8000, () => {
  console.log(`Server is running at port: 8000`);
});
