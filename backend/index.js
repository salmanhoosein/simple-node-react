const express = require("express");
const cors = require("cors");
const db = require("./database/connection");
const bodyParser = require("body-parser");

const dataRoutes = require("./routes/data");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res, next) => res.send("hello from DSS group"));
app.use("/data", dataRoutes);

app.listen(8000, async () => {
  /* check connection to db, if failed log error message */
  console.log("server has started on port 8000");
});
