// backend/scripts/exportAll.js
import fs from "fs";
import path from "path";
import { maciDb, mcmi3Db, paschmieschekDb } from "../config/mongoDb.js";

export async function exportAllDatabases() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const exportDir = path.join(process.cwd(), `mongo_exports_${timestamp}`);
  fs.mkdirSync(exportDir, { recursive: true });

  const dbs = [
    { name: "maci", conn: maciDb },
    { name: "mcmi3", conn: mcmi3Db },
    { name: "paschmieschek", conn: paschmieschekDb },
  ];

  for (const { name, conn } of dbs) {
    await conn.asPromise();

    const collections = await conn.db.listCollections().toArray();
    const dbFolder = path.join(exportDir, name);
    fs.mkdirSync(dbFolder, { recursive: true });

    for (const coll of collections) {
      const docs = await conn.db.collection(coll.name).find().toArray();
      fs.writeFileSync(
        path.join(dbFolder, `${coll.name}.json`),
        JSON.stringify(docs, null, 2)
      );
    }
  }

  return exportDir;
}
