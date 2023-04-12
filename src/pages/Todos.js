import { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";

export function Todos() {
  const { todos, markAsDoneHandler, totalTodos } = useContext(DataContext);
  return (
    <>
      <h1>This is Todos </h1>
      <p>Items: {totalTodos}</p>
      <br/>
      {todos.map((todo) => {
        const { id, title, description, isCompleted } = todo;

        const textStyle = { textDecoration: isCompleted ? "line-through" : "" };

        return (
          <div key={id}>
            <h3 style={textStyle}>{title}</h3>
            <p style={textStyle}>{description}</p>
            <p>Status: {isCompleted ? "Done" : "Not Done"}</p>
            <button onClick={() => markAsDoneHandler(id)}>Mark as done</button>
            <br />
            <br />
          </div>
        );
      })}
    </>
  );
}
