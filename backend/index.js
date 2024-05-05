const express = require("express");
const database = require("./config/database");
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const router = require("./routes/index");

const app = express();

//  middleware
app.use(cors());
app.use(express.json());

// db connect
database.connect();

// redirect routes
app.use("/api/v1", router);

// listening port
app.listen(PORT, () => {
  console.log(`Server started on : ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello");
});
