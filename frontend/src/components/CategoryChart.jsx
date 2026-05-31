import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";

function CategoryChart({
  habits
}) {

  const categoryCounts = {};

  habits.forEach((habit) => {

    categoryCounts[
      habit.category
    ] =
      (categoryCounts[
        habit.category
      ] || 0) + 1;

  });

  const data =
    Object.entries(
      categoryCounts
    ).map(
      ([name, value]) => ({
        name,
        value
      })
    );

  const COLORS = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff8042",
    "#0088fe"
  ];

  return (

    <PieChart
      width={400}
      height={300}
    >

      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        outerRadius={100}
      >

        {
          data.map(
            (entry, index) => (

              <Cell
                key={index}
                fill={
                  COLORS[
                    index %
                    COLORS.length
                  ]
                }
              />

            )
          )
        }

      </Pie>

      <Tooltip />

      <Legend />

    </PieChart>

  );

}

export default CategoryChart;