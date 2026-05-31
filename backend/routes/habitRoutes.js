const express = require("express");

const router = express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const {
  getHabits,
  createHabit,
  deleteHabit,
  toggleHabit,
  updateHabit
} = require("../controllers/habitController");

router.get(
  "/",
  authMiddleware,
  getHabits
);

router.post(
  "/",
  authMiddleware,
  createHabit
);

router.delete(
  "/:id",
  authMiddleware,
  deleteHabit
);

router.put(
  "/:id",
  authMiddleware,
  toggleHabit
)
router.put(
  "/edit/:id",
  authMiddleware,
  updateHabit
);
module.exports = router;