import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";
import { activeTodo, completedTodos } from "redux/selectors";

export const TaskCounter = () => {
  const activeTasks = useSelector(activeTodo)
  const completedTasks = useSelector(completedTodos)
  return (
    <div>
      <p className={css.text}>Active: {activeTasks.length}</p>
      <p className={css.text}>Completed: {completedTasks.length}</p>
    </div> 
  );
};
