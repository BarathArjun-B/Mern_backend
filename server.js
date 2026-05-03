import express from "express";
import dotenv from "dotenv";
import notesRoutes from "./src/routes/notesRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/notes", notesRoutes);

app.listen(process.env.PORT || 5001, () => {
    console.log("Server started 🚀");
});