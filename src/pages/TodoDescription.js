import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../contexts/DataProvider";

export function TodoDescription() {
  const { todos } = useContext(DataContext);
  const { todoId } = useParams();
  const todo = todos.find(({ id }) => id === Number(todoId));
  console.log(todo);
  return (
    <>
      <h1>Todo Description</h1>
      <h3>Title : {todo?.title}</h3>
      <p>{todo?.description}</p>
      <p>Status: {todo?.isCompleted ? "Done" : "Not Done"}</p>
      {}
    </>
  );
}
