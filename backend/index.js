const express = require("express");
const database = require("./config/database");
const PORT = process.env.PORT || 4000;
const app = express();

// db connect
database.connect();

// listening port
app.listen(PORT, () => {
  console.log(`Server started on : ${PORT}`);
});
