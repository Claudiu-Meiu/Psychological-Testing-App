import { Schema } from "mongoose";
import { maciDb } from "../config/mongoDb.js";

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
  name: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
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
