export default function TaskItem({ task, deleteTask, completeTask }) {
  return (
    <li className={`task-item ${task.priority.toLowerCase()}`}>
      <div className="task-info">
        <div>
          {task.title} <strong>{task.priority}</strong>
        </div>
        <div className="task-deadline">Due: {task.deadline}</div>
      </div>
      <div className="task-buttons">
        {!task.completed && (
          <button
            className="complete-button"
            onClick={() => completeTask(task.id)}
          >
            Complete
          </button>
        )}
        <button className="delete-button" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
