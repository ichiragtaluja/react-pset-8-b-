import { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";

export function Todos() {
  const { todos } = useContext(DataContext);
  return (
    <>
      <h1>This is todos </h1>
      {todos.map((todo) => {
        const { id, title, description, isCompleted } = todo;

        return (
          <div key={id}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Status: {isCompleted ? "Done" : "Not Done"}</p>
            <br />
          </div>
        );
      })}
    </>
  );
}
