import { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";
import { NavLink } from "react-router-dom";

export function DoneTodos() {
  const { todos, totalDoneTodos } = useContext(DataContext);
  return (
    <>
      <h1>This is done - todos</h1>
      <p>Items: {totalDoneTodos}</p>
      {todos.map((todo) => {
        const { id, title, description, isCompleted } = todo;

        return (
          isCompleted && (
            <div key={id}>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>Status: {isCompleted ? "Done" : "Not Done"}</p>
              <NavLink to={`/todo/description/${id}`}>Expand Todo</NavLink>
              <br />
              <br />
            </div>
          )
        );
      })}
    </>
  );
}
