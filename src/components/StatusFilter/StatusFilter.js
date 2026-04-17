import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";
import { useDispatch } from "react-redux";
import { filterAll } from "redux/actions";

export const StatusFilter = () => {
  const dispatch = useDispatch()

  const setFilter = (filterType) => {
    dispatch(filterAll(filterType))
  }
  return (
    <div className={css.wrapper}>
      <Button onClick={() => setFilter("all")}>All</Button>
      <Button onClick={() => setFilter("active")}>Active</Button>
      <Button onClick={() => setFilter("completed")}>Completed</Button>
    </div>
  );
};
