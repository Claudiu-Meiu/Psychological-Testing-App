import { createConnection } from "mongoose";

const maciDb = createConnection("mongodb://localhost:27017/maci");

const mcmi3Db = createConnection("mongodb://localhost:27017/mcmi3");

const paschmieschekDb = createConnection(
  "mongodb://localhost:27017/paschmieschek"
);

export { maciDb, mcmi3Db, paschmieschekDb };
