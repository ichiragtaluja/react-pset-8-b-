import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Todos } from "./pages/Todos";
import { DoneTodos } from "./pages/DoneTodos";
import { OpenTodos } from "./pages/OpenTodos";
import { TodoDescription } from "./pages/TodoDescription";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink> ||{" "}
        <NavLink to="/done-todos">Done Todo</NavLink> ||{" "}
        <NavLink to="/open-todos">Open Todo</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/open-todos" element={<OpenTodos />} />
        <Route path="/done-todos" element={<DoneTodos />} />
        <Route path="/todo/description/:todoId" element={<TodoDescription />} />
      </Routes>
    </div>
  );
}

export default App;
