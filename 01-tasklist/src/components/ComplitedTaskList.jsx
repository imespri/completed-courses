import TaskItem from "./TaskItem";

export default function CompletedTaskList({ completedTasks, deleteTask }) {
  const tasks = completedTasks.map((item) => (
    <TaskItem key={item.id} task={item} deleteTask={deleteTask} />
  ));

  return <ul className="completed-task-list">{tasks}</ul>;
}
