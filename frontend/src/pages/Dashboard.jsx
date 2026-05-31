import { useEffect, useState } from "react";
import AnalyticsChart from "../components/AnalyticsChart";
import { getHabits } from "../api/habitApi";
import Heatmap from "../components/Heatmap";
import Navbar from "../components/Navbar";
import AIInsights from "../components/AIInsights";
import CategoryChart from "../components/CategoryChart";
function Dashboard(){
    const [habits, setHabits] = useState([]);
    useEffect(() => {

    async function loadHabits(){
        const data =
        await getHabits();
        setHabits(data);
    }
    loadHabits();
    }, []);

    const totalHabits =habits.length;

    const completedHabits =
    habits.filter((habit) => {

        return habit.completed;

    }).length;

    const completionRate =
    totalHabits > 0
        ? Math.round(
            (
            completedHabits /
            totalHabits
            ) * 100
        )
        : 0;

    const bestStreak =
    habits.reduce(
        (max, habit) => {

        return Math.max(
            max,
            habit.streak
        );

        },
        0
    );
    return(
        <div className="dashboard-page">
      <Navbar />
      <div className="dashboard-container">
        <header className="page-header">
          <h1>Dashboard</h1>
          <p>
            Welcome to AI Productivity OS. Track habits, monitor streaks,
            and surface smart productivity insights in a clean dashboard.
          </p>
        </header>

        <div className="stats-grid">
          <div className="card">
            <h2>{totalHabits}</h2>
            <p>Total Habits</p>
          </div>
          <div className="card">
            <h2>{completedHabits}</h2>
            <p>Completed</p>
          </div>
          <div className="card">
            <h2>{completionRate}%</h2>
            <p>Completion Rate</p>
          </div>
          <div className="card">
            <h2>{bestStreak}</h2>
            <p>Best Streak</p>
          </div>
          <div className="card">
            <h2>{habits.filter((habit) => habit.streak >= 5).length}</h2>
            <p>Strong Habits</p>
          </div>
        </div>

        <div className="panel-grid">
          <div className="chart-card">
            <h2>Completion Trend</h2>
            <AnalyticsChart habits={habits} />
          </div>

          <div className="heatmap-card">
            <h2>Productivity Heatmap</h2>
            <Heatmap habits={habits} />
          </div>

          <div className="category-card">
            <h2>Category Analytics</h2>
            <CategoryChart habits={habits} />
          </div>

          <AIInsights habits={habits} />
        </div>
      </div>
    </div>
        
    )
}
export default Dashboard;