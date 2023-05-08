const router = require("express").Router();
const User = require("../models/User");

//UPDATE USER
router.put("/:id", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE USER

module.exports = router;
