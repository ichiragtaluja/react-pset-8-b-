import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../data/fakeFetch";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const markAsDoneHandler = (selectedId) => {
    const selectedToDo = todos.find(({ id }) => id === selectedId);

    selectedToDo.isCompleted = !selectedToDo.isCompleted;
    setTodos((todos) => [...todos]);
  };

  const totalTodos = todos.reduce((acc, todo) => acc + 1, 0);

  const totalDoneTodos = todos.reduce(
    (acc, todo) => (todo.isCompleted ? acc + 1 : acc),
    0
  );

  const totalOpenTodos = todos.reduce(
    (acc, todo) => (!todo.isCompleted ? acc + 1 : acc),
    0
  );

  const getTodos = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/todos");
      if (response.status === 200) {
        setTodos(response.data.todos);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <DataContext.Provider
      value={{ todos, markAsDoneHandler, totalTodos, totalDoneTodos, totalOpenTodos }}
    >
      {children}
    </DataContext.Provider>
  );
}
