const express = require("express");
const router = express.Router();

router.get("/foodData", async (req, res) => {
  try {
    // console.log(global.food_data);
    // console.log(res.json(global.food_data));
    res.send({ data: global.food_data, categories: global.food_categories });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: [{ msg: "Server Error" }] });
  }
});

module.exports = router;
