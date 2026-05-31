import CalendarHeatmap
from "react-calendar-heatmap";

function Heatmap({ habits }) {

  const today = new Date();

  const dateCounts = {};

  habits.forEach((habit) => {

    (habit.history || []).forEach((date) => {

      dateCounts[date] =
        (dateCounts[date] || 0) + 1;

    });

  });

  const values =
    Object.entries(dateCounts)
      .map(([date, count]) => ({
        date,
        count
      }));

  return (
    <div>
      <CalendarHeatmap
        startDate={new Date(today.getFullYear(), 0, 1)}
        endDate={today}
        values={values}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          if (value.count >= 4) {
            return "color-scale-4";
          }
          if (value.count === 3) {
            return "color-scale-3";
          }
          if (value.count === 2) {
            return "color-scale-2";
          }
          return "color-scale-1";
        }}
        showWeekdayLabels={true}
      />
    </div>
  );

}

export default Heatmap;