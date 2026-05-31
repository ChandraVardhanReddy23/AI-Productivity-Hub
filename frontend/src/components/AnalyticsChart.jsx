import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

function AnalyticsChart({
  habits
}) {

  const data = [
    {
      name: "Completed",
      value:
        habits.filter(
          (habit) => {

            return (
              habit.completed
            );

          }
        ).length
    },

    {
      name: "Pending",
      value:
        habits.filter(
          (habit) => {

            return (
              !habit.completed
            );

          }
        ).length
    }
  ];

  return (

    <BarChart
      width={500}
      height={300}
      data={data}
    >

      <CartesianGrid
        strokeDasharray="3 3"
      />

      <XAxis dataKey="name" />

      <YAxis />

      <Tooltip />

      <Bar dataKey="value" />

    </BarChart>

  );

}

export default AnalyticsChart;