import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import { List } from "antd";

const TodoList = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <List
      dataSource={todosCtx.items}
      renderItem={(item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={() => todosCtx.removeTodo(item.id)}
          onEditTodo={(newText) => todosCtx.editTodo(item.id, newText)}
        />
      )}
    ></List>
  );
};

export default TodoList;
