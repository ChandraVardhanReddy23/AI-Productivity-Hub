function SmartInsights({ habits }) {

  if(habits.length === 0){

    return (
      <div className="insights">

        <h2>
          Smart Insights
        </h2>

        <p>
          Add some habits to get insights.
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

      }
    );

  const weakHabit =
    habits.reduce(
      (worst, habit) => {

        return habit.streak <
          worst.streak
          ? habit
          : worst;

      }
    );

  return (

    <div className="insights">

      <h2>
        Smart Insights
      </h2>

      <p>
        🏆 {bestHabit.title}
         is your strongest habit.
      </p>

      <p>
        🔥 Current best streak:
        {bestHabit.streak}
      </p>

      <p>
        ⚠️ Focus more on
        {weakHabit.title}
      </p>

    </div>

  );

}

export default SmartInsights;