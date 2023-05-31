const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const fs = require("fs");
const { getUmlFile } = require("./parser");
const { spawn, spawnSync } = require("child_process");

const publicPath = path.join(__dirname, "public");
app.use(express.static(path.join(publicPath, "uml_desginer")));
app.use(express.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(publicPath, "uml_desginer", "index.html"));
});

app.post("/saveuml", (req, res) => {
  const data = getUmlFile(req.body.data);
  fs.writeFile("../config/uml.json", JSON.stringify(data), err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Data written to file");
  });
  res.send({ message: "Saved Successfully" });
});

app.get("/generate", (req, res) => {
  const child = spawn("yo", ["poc-ionic", "force"], { shell: true });
  child.on("error", err => {
    console.error(`Error occurred while executing command: ${err}`);
    res.status(500).send({ message: "Error occurred while generating output" });
  });
  child.on("close", code => {
    console.log(`Command exited with code ${code}`);
    res.status(200).send({ message: "generated successfully" });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
