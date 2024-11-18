import { useState } from "react";
import "./App.css";
import TodosContextProvider from "./store/todos-context";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {

  return (
    <TodosContextProvider>
      <TodoForm />
      <TodoList />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </TodosContextProvider>
  );
}

export default App;
