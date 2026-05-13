const express = require("express");

const app = express();

app.use(express.text({ type: "*/*" }));

app.use((req, res) => {
  console.log("==== REQUEST RECEIVED ====");
  console.log("METHOD:", req.method);
  console.log("URL:", req.url);
  console.log("BODY:", req.body);

  res.status(200).send("OK");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});