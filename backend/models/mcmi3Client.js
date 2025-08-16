import { Schema } from "mongoose";
import { mcmi3Db } from "../config/mongodb.js";

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

const Mcmi3ClientSchema = new Schema({
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

const Mcmi3Client = mcmi3Db.model("Mcmi3Client", Mcmi3ClientSchema, "clients");

export default Mcmi3Client;
