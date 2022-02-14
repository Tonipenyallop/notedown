const express = require("express");
const cors = require("cors");
const path = require("path");
const knex = require("knex");
const mode = require("../knexfile");
const config =
  process.env.NODE_ENV === "production" ? "production" : "development";

const db = knex(mode[config]);

// const db = require("../db/index");

const PORT = process.env.PORT || 9000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/api/notes", (_, res) => {
  res.send("send message successfully");
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
