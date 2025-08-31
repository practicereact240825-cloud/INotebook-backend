// index.js
import connectToMongo from "./db.js";
import express from "express";

connectToMongo();

const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from iNotebook backend!");
});

// Import routes
import authRoutes from "./routes/auth.js";
import notesRoutes from "./routes/notes.js";

app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
