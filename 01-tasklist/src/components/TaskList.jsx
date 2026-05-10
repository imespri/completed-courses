import TaskItem from "./TaskItem";

export default function TaskList({ activeTasks, deleteTask, completeTask }) {
  const tasks = activeTasks.map((task) => (
    <TaskItem
      task={task}
      key={task.id}
      deleteTask={deleteTask}
      completeTask={completeTask}
    />
  ));

  return <ul className="task-list">{tasks}</ul>;
}
