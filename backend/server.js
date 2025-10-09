import express from "express";
import cors from "cors";

import maciRoutes from "./routes/maciRoutes.js";
import mcmi3Routes from "./routes/mcmi3Routes.js";
import paschmieschekRoutes from "./routes/paschmieschekRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/maci", maciRoutes);
app.use("/api/mcmi3", mcmi3Routes);
app.use("/api/paschmieschek", paschmieschekRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
