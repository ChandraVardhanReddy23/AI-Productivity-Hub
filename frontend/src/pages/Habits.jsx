import { useEffect, useState }
from "react";

import {
  getHabits,
  createHabit,
  deleteHabit,
  toggleHabit,
  updateHabit
} from "../api/habitApi";

import HabitForm
from "../components/HabitForm";

import HabitList
from "../components/HabitList";

import Navbar
from "../components/Navbar";

function Habits() {

  const [habits, setHabits] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {

    async function loadHabits(){

      try {

        const data =
          await getHabits();

        setHabits(data);

      } catch(error){

        setError(
          "Failed to load habits"
        );

      } finally {

        setLoading(false);

      }

    }

    loadHabits();

  }, []);

  async function handleAddHabit(
    title,category
  ){

    try {

      setLoading(true);

      const newHabit =
        await createHabit(title,category);

      setHabits([
        ...habits,
        newHabit
      ]);

    } catch(error){

      setError(
        "Failed to add habit"
      );

    } finally {

      setLoading(false);

    }

  }

  async function handleDeleteHabit(
    id
  ){

    try {

      setLoading(true);

      await deleteHabit(id);

      setHabits(
        habits.filter((habit) => {

          return habit.id !== id;

        })
      );

    } catch(error){

      setError(
        "Failed to delete habit"
      );

    } finally {

      setLoading(false);

    }

  }

  async function handleToggleHabit(
    id
  ){

    try {

      await toggleHabit(id);

      const updatedHabits =
        await getHabits();

      setHabits(updatedHabits);

    } catch(error){

      setError(
        "Failed to update habit"
      );

    }

  }
  async function handleEditHabit(
    id,
    title
  ){

    try {

      await updateHabit(
        id,
        title
      );

      const updatedHabits =
        await getHabits();

      setHabits(updatedHabits);

    } catch(error){

      setError(
        "Failed to edit habit"
      );

    }

  }

  if(loading){

    return <h2>Loading...</h2>;

  }

  if(error){

    return <h2>{error}</h2>;

  }

  return (
    <div className="habits-page">
      <Navbar />
      <div className="habits-container">
        <header className="page-header">
          <h1>Habit Management</h1>
          <p>
            Build consistent routines with a clean habit workflow, category
            labels, streak tracking, and responsive habit cards.
          </p>
        </header>

        <div className="section-block">
          <HabitForm addHabit={handleAddHabit} />
        </div>

        <HabitList
          habits={habits}
          deleteHabit={handleDeleteHabit}
          toggleHabit={handleToggleHabit}
          editHabit={handleEditHabit}
        />
      </div>
    </div>
  );

}

export default Habits;