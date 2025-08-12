const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const maciDb = mongoose.createConnection("mongodb://localhost:27017/maci", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mcmi3Db = mongoose.createConnection("mongodb://localhost:27017/mcmi3", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ScoreSchema = new mongoose.Schema({
  scale: {
    type: String,
    required: true,
  },
  gross: {
    type: Number,
    required: true,
  },
  br: {
    type: Number,
    required: true,
  },
});

const MaciClientSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  answers: {
    type: Object,
    required: true,
  },
  scores: {
    type: [ScoreSchema],
    required: false,
  },
});

const Mcmi3ClientSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  answers: {
    type: Object,
    required: true,
  },
  scores: {
    type: [ScoreSchema],
    required: false,
  },
});

// -------------------------------------------------------------------------------------------

// Create models for the Clients collections in both databases
const MaciClient = maciDb.model("Client", MaciClientSchema, "clients");
const Mcmi3Client = mcmi3Db.model("Client", Mcmi3ClientSchema, "clients");

// API routes for maci database
app.get("/api/maci/clients", async (req, res) => {
  try {
    const clients = await MaciClient.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API route to add a new client to the maci database
app.post("/api/maci/clients", async (req, res) => {
  const newClient = new MaciClient(req.body);
  try {
    await newClient.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// API route to update answers for a specific client in the maci database
app.put("/api/maci/clients/:id/answers", async (req, res) => {
  const clientId = req.params.id;
  const updatedAnswers = req.body.answers;

  try {
    const client = await MaciClient.findByIdAndUpdate(
      clientId,
      { answers: updatedAnswers },
      { new: true }
    );

    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API route to update scores for a specific client in the maci database
app.put("/api/maci/clients/:id/scores", async (req, res) => {
  const clientId = req.params.id;
  const scoresValue = req.body;

  try {
    const client = await MaciClient.findById(clientId);

    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    client.scores = scoresValue;
    await client.save();
    return res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API route to delete a specific client in the maci database
app.delete("/api/maci/clients/:id", async (req, res) => {
  const clientId = req.params.id;

  try {
    const deletedClient = await MaciClient.findByIdAndDelete(clientId);

    if (!deletedClient) {
      return res.status(404).json({ message: "Client not found" });
    }

    res
      .status(200)
      .json({ message: "Client deleted successfully", client: deletedClient });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// -------------------------------------------------------------------------------------------

// API routes for mcmi3 database
app.get("/api/mcmi3/clients", async (req, res) => {
  try {
    const clients = await Mcmi3Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API route to add a new client to the mcmi3 database
app.post("/api/mcmi3/clients", async (req, res) => {
  const newClient = new Mcmi3Client(req.body);
  try {
    await newClient.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// API route to update answers for a specific client in the mcmi3 database
app.put("/api/mcmi3/clients/:id/answers", async (req, res) => {
  const clientId = req.params.id;
  const updatedAnswers = req.body.answers;

  try {
    const client = await Mcmi3Client.findByIdAndUpdate(
      clientId,
      { answers: updatedAnswers },
      { new: true }
    );

    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API route to update scores for a specific client in the mcmi3 database
app.put("/api/mcmi3/clients/:id/scores", async (req, res) => {
  const clientId = req.params.id;
  const scoresValue = req.body;

  try {
    const client = await Mcmi3Client.findById(clientId);

    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    client.scores = scoresValue;
    await client.save();
    return res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API route to delete a specific client in the mcmi3 database
app.delete("/api/mcmi3/clients/:id", async (req, res) => {
  const clientId = req.params.id;

  try {
    const deletedClient = await Mcmi3Client.findByIdAndDelete(clientId);

    if (!deletedClient) {
      return res.status(404).json({ message: "Client not found" });
    }

    res
      .status(200)
      .json({ message: "Client deleted successfully", client: deletedClient });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
