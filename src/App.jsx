import "./App.css";
import TodosContextProvider from "./store/todos-context";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import { Space } from "antd";

function App() {
  return (
    <TodosContextProvider>
      <Space direction="vertical">
        <FilterButtons />
        <TodoForm />
        <TodoList />
      </Space>
    </TodosContextProvider>
  );
}

export default App;
