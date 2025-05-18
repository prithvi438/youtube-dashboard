import express from 'express';
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();




//serving frontend
app.use(express.static(path.join(__dirname, "./dist")));


export default app;