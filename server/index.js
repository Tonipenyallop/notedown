const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("../db/index");

const PORT = process.env.PORT || 9000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/api/notes", async (req, res) => {
  const table = await db.select().table("notes");
  res.send(table);
});

app.post("/api/add", async (req, res) => {
  await db("notes").insert({ todo: req.body.todo });

  res.send("Added successfully");
});

app.delete("/api/delete", async (req, res) => {
  await db("notes").del().where("id", req.body.id);

  res.send("Deleted successfully");
});

try {
  db.migrate.latest();
  db.seed.run();

  app.listen(PORT, () => {
    console.log(`Listening PORT ${PORT}`);
  });
} catch (err) {
  console.error(err);
}
