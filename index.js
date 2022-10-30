const express = require("express");
var cors = require('cors')
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  const data = {
    slackUsername: "Abdulhameed4850",
    backend: true,
    age: 18,
    bio: "Javascript boy",
  };
  res.json(data);
});

app.listen(PORT, () => {
  console.log("server running on " + PORT);
});