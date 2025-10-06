import { Router } from "express";
import MaciClient from "../models/maciClient.js";

const router = Router();

// API route to get all clients from the maci database
router.get("/clients", async (req, res) => {
  try {
    const clients = await MaciClient.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API route to add a new client to the maci database
router.post("/clients", async (req, res) => {
  const newClient = new MaciClient(req.body);
  try {
    await newClient.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// API route to update answers for a specific client in the maci database
router.put("/clients/:id/answers", async (req, res) => {
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

    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API route to update scores for a specific client in the maci database
router.put("/clients/:id/scores", async (req, res) => {
  const clientId = req.params.id;
  const scoresValue = req.body;

  try {
    const client = await MaciClient.findById(clientId);

    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    client.scores = scoresValue;
    await client.save();
    return res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API route to delete a specific client in the maci database
router.delete("/clients/:id", async (req, res) => {
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

export default router;
