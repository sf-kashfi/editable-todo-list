import React, { useEffect, useState } from "react";

export const TodosContext = React.createContext({
  items: [],
  addTodo: () => {},
  removeTodo: (id) => {},
  editTodo: (id, newText) => {},
  changeStatus: (id) => {}
});

const TodosContextProvider = (props) => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = (todoText) => {
    setTodos((prevTodos) => {
      return prevTodos.concat({
        id: new Date().toISOString(),
        text: todoText,
        status: false,
      });
    });
  };

  const removeTodoHandler = (todoId) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const editTodoHandler = (todoId, newText) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, text: newText } : todo
      );
    });
  };

  const changeStatusHandler = (todoId) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, status: !todo.status } : todo
      );
    });
  };

  const contextValue = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    editTodo: editTodoHandler,
    changeStatus: changeStatusHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
