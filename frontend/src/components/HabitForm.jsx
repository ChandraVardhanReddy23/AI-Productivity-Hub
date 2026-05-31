import { useState }
from "react";

function HabitForm({ addHabit }) {

  const [input, setInput] =useState("");
  const [category,setCategory] = useState("Fitness");

  function handleSubmit(){

    if(!input.trim()) return;

    addHabit(input,category);

    setInput("");

  }

  return (
    <div className="habit-form">
      <input
        type="text"
        placeholder="Enter habit"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Fitness</option>
        <option>Learning</option>
        <option>Health</option>
        <option>Coding</option>
      </select>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleSubmit}
      >
        Add Habit
      </button>
    </div>
  );

}

export default HabitForm;