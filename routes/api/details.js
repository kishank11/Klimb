const express = require("express");
const router = express.Router();
const async = require("async");
const User = require("../../models/detailsModel");

router.get("/", async (req, res) => {
  try {
    const user = await User.find();

    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

router.post("/", async (req, res) => {
  try {
    async.eachSeries(
      (req.body,
      (async () => {
        const data = await User.insertMany(req.body);
        User.createIndexes({ Email: "text" }, { unique: true, dropDups: true });
      })(),
      () => {
        console.log("CALLBACK");
      })
    );
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
});

router.delete("/", async (req, res) => {
  try {
    User.deleteMany().then(function () {
      console.log("Data deleted"); // Success
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
