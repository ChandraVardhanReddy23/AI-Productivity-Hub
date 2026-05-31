const Habit =
  require("../models/Habit");

const getHabits =
async (req,res) => {

  const habits =
    await Habit.find({

      userId:
        req.user.id

    });

  res.json(habits);

};

const createHabit =
async (req,res) => {

  const {
    title,
    category
  } = req.body;

  const newHabit =
    await Habit.create({

      title,

      category,

      userId:
        req.user.id

    });

  res.json(newHabit);

};
const deleteHabit =
async (req,res) => {

  await Habit.findByIdAndDelete(

    req.params.id

  );

  res.json({

    message:
      "Habit deleted"

  });

};
const toggleHabit =
async (req,res) => {

  const habit =
    await Habit.findById(

      req.params.id

    );

  if(!habit){

    return res
      .status(404)
      .json({

        message:
          "Habit not found"

      });

  }

  const today =
    new Date()
      .toISOString()
      .split("T")[0];

  const becomingCompleted =
    !habit.completed;

  if(
    becomingCompleted &&
    habit.lastCompleted !== today
  ){

    habit.streak += 1;

    habit.history.push(
      today
    );

    habit.lastCompleted =
      today;

  }

  habit.completed =
    becomingCompleted;

  await habit.save();

  res.json({

    message:
      "Habit updated"

  });

};
const updateHabit =
async (req,res) => {

  const {
    title
  } = req.body;

  await Habit.findByIdAndUpdate(

    req.params.id,

    {
      title
    }

  );

  res.json({

    message:
      "Habit updated"

  });

};
module.exports = {
  getHabits,
  createHabit,
  deleteHabit,
  toggleHabit,
  updateHabit
};