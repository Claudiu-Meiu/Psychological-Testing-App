import { Schema } from "mongoose";
import { paschmieschekDb } from "../config/mongoDb.js";

const ScoreSchema = new Schema({
  groupName: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
  symptomaticAnswers: {
    type: [Number],
    required: true,
  },
});

const PaSchmieschekClientSchema = new Schema({
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

const PaSchmieschekClient = paschmieschekDb.model(
  "PaSchmieschekClient",
  PaSchmieschekClientSchema,
  "clients"
);

export default PaSchmieschekClient;
