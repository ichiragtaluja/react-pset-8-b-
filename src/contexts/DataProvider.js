import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../data/fakeFetch";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [todos, setTodos] = useState([]);

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
    <DataContext.Provider value={{ todos }}>{children}</DataContext.Provider>
  );
}
