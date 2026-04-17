import { Button } from "components/Button/Button";
import css from "./TaskForm.module.css";
import { addTodo } from "redux/actions";
import { useDispatch } from "react-redux";

export const TaskForm = () => {
  const dispatch = useDispatch(); //! дозволяє активувати action, без цього вони не будуть гарно працювати
  const handleSubmit = event => {
    event.preventDefault();
    const value = event.target.elements.text.value;
    dispatch(addTodo(value));
    event.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
