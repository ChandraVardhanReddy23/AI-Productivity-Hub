import HabitCard from "./HabitCard";

function HabitList({
  habits,
  deleteHabit,
  toggleHabit,
  editHabit
}) {

  return (

    <div className="habit-list">

      {
        habits.map((habit) => {

          return (

            <HabitCard
              key={habit.id}
              habit={habit}
              toggleHabit={toggleHabit}
              deleteHabit={
                deleteHabit
              }
              editHabit={editHabit}
            />

          );

        })
      }

    </div>

  );

}

export default HabitList;