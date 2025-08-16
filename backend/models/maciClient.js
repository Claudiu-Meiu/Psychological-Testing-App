import { Schema } from "mongoose";
import { maciDb } from "../config/mongodb.js";

const ScoreSchema = new Schema({
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

const MaciClientSchema = new Schema({
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

const MaciClient = maciDb.model("MaciClient", MaciClientSchema, "clients");

export default MaciClient;
