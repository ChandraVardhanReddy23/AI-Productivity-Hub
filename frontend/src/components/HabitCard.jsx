function HabitCard({
  habit,
  deleteHabit,
  toggleHabit,
  editHabit
}) {

  return (
    <div className="habit-card">
      <div className="habit-card-heading">
        <div>
          <h3>{habit.title}</h3>
          <div className="badge-group">
            <span className="badge badge--category">{habit.category}</span>
            <span className={`badge badge--status ${habit.completed ? 'success' : ''}`}>
              {habit.completed ? 'Completed' : 'Pending'}
            </span>
          </div>
        </div>
        <span className="badge badge--streak">🔥 {habit.streak} day streak</span>
      </div>
      <div className="habit-actions">
        <button
          type="button"
          className={`btn ${habit.completed ? 'btn-secondary' : 'btn-success'}`}
          onClick={() => toggleHabit(habit.id)}
        >
          {habit.completed ? 'Mark Pending' : 'Mark Complete'}
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            const newTitle = prompt('Edit habit', habit.title);
            if (newTitle) {
              editHabit(habit.id, newTitle);
            }
          }}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteHabit(habit.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default HabitCard;