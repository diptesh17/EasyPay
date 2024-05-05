const express = require("express");
const database = require("./config/database");
const PORT = process.env.PORT || 4000;
const router = require("./routes/index");
const app = express();

// db connect
database.connect();

// redirect routes
app.use("/api/v1", router);

// middleware
app.use(express.json());

// listening port
app.listen(PORT, () => {
  console.log(`Server started on : ${PORT}`);
});
