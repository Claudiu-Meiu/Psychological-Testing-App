import { Router } from "express";
import fs from "fs";
import path from "path";
import archiver from "archiver";
import { exportAllDatabases } from "../scripts/exportAll.js";

const router = Router();

router.get("/export", async (req, res) => {
  try {
    const folder = await exportAllDatabases();

    const archiveName = `psychological-testing-app-mongodb-backup-${new Date()
      .toISOString()
      .slice(0, 10)}.zip`;
    const archivePath = path.join(process.cwd(), archiveName);

    const output = fs.createWriteStream(archivePath);
    const archive = archiver("zip", { zlib: { level: 9 } });

    output.on("close", () => {
      res.download(archivePath, archiveName, (err) => {
        if (err) console.error(err);
        fs.rmSync(folder, { recursive: true, force: true });
        fs.unlinkSync(archivePath);
      });
    });

    archive.on("error", (err) => {
      throw err;
    });

    archive.pipe(output);

    archive.directory(folder, false);

    await archive.finalize();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Backup failed", error: err.message });
  }
});

export default router;
