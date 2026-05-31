function Insights({ habits }) {

  if (habits.length === 0) {

    return (
      <div className="insights">

        <h2>
          Productivity Insights
        </h2>

        <p>
          No habits yet.
        </p>

      </div>
    );

  }

  const bestHabit =
    habits.reduce(
      (best, habit) => {

        return habit.streak >
          best.streak
          ? habit
          : best;

      },
      {
        title: "None",
        streak: 0
      }
    );

  const categoryCounts = {};

  habits.forEach((habit) => {

    categoryCounts[
      habit.category
    ] =
      (categoryCounts[
        habit.category
      ] || 0) + 1;

  });

  const strongestCategory =
    Object.entries(
      categoryCounts
    ).reduce(
      (best, current) => {

        return current[1] >
          best[1]
          ? current
          : best;

      },
      ["None", 0]
    );

  return (

    <div className="insights">

      <h2>
        Productivity Insights
      </h2>

      <p>
        🏆 Best Habit:
        {" "}
        {bestHabit.title}
      </p>

      <p>
        🔥 Longest Streak:
        {" "}
        {bestHabit.streak}
      </p>

      <p>
        📊 Strongest Category:
        {" "}
        {strongestCategory[0]}
      </p>

      <p>
        📁 Total Categories:
        {" "}
        {Object.keys(categoryCounts).length}
      </p>

      <p>
        🎯 Total Habits:
        {" "}
        {habits.length}
      </p>

    </div>

  );

}

export default Insights;