import { useRef, useContext } from "react";

import { TodosContext } from "../store/todos-context";
import { Button, Checkbox, Form, Input } from "antd";

const TodoForm = () => {
  const todosCtx = useContext(TodosContext);

  const onFinish = (values) => {
    todosCtx.addTodo(values.todo);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="todos_form_controls"
        layout="inline"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Add Taks"
          name="todo"
          rules={[{ required: true, message: "Enter a Task!" }]}
        >
          <Input placeholder="Add a Task here ..." />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default TodoForm;
