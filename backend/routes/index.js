const express = require("express");
const router = express.Router();
const user = require("./user");
const accountRouter = require("./routes/account");

router.use("/user", user);
router.use("/account", accountRouter);

module.exports = router;
