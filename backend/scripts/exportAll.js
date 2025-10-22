import fs from "fs";
import path from "path";
import os from "os";
import { EJSON } from "bson";
import { maciDb, mcmi3Db, paschmieschekDb } from "../config/mongoDb.js";

export async function exportAllDatabases() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const exportDir = path.join(os.tmpdir(), `mongo_exports_${timestamp}`);
  fs.mkdirSync(exportDir, { recursive: true });

  const dbs = [
    { name: "maci", conn: maciDb },
    { name: "mcmi3", conn: mcmi3Db },
    { name: "paschmieschek", conn: paschmieschekDb },
  ];

  for (const { name, conn } of dbs) {
    await conn.asPromise();
    const db = conn.db;
    const collections = await db.listCollections().toArray();

    const dbFolder = path.join(exportDir, name);
    fs.mkdirSync(dbFolder, { recursive: true });

    for (const coll of collections) {
      const docs = await db.collection(coll.name).find().toArray();

      const relaxedEjson = EJSON.stringify(docs, { relaxed: true });

      const pretty = JSON.stringify(JSON.parse(relaxedEjson), null, 1);

      fs.writeFileSync(
        path.join(dbFolder, `${name}.${coll.name}.json`),
        pretty + "\n"
      );
    }
  }

  return exportDir;
}
