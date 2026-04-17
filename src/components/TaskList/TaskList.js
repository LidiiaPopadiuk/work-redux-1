import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";
import { useSelector } from "react-redux";
import { getTasks } from "redux/selectors";

export const TaskList = () => {
  const tasks = useSelector(getTasks) //! useSelector - повертає state і ми можкмо повернути що хочемо
  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
