import { Button, Input, List, Space } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useRef, useState } from "react";

const TodoItem = ({ text, onRemoveTodo, onEditTodo }) => {
  const [editing, setEditing] = useState(false);
  const [inputText, setInputText] = useState(text);
  const inputRef = useRef();

  const handleSaveEdit = () => {
    const newText = inputText;
    if (newText && newText !== text) {
      onEditTodo(newText);
    }
    setEditing(false);
  };

  const handleCancelEdit = () => {
    setInputText(text);
    setEditing(false);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <List.Item
      actions={[
        editing ? (
          <Space>
            <Button
              color="primary"
              variant="solid"
              onClick={handleCancelEdit}
              shape="circle"
              size="small"
              icon={<CloseOutlined />}
            />
            <Button
              color="primary"
              variant="solid"
              onClick={handleSaveEdit}
              shape="circle"
              size="small"
              icon={<CheckOutlined />}
            />
          </Space>
        ) : (
          <Button
            color="primary"
            variant="solid"
            onClick={() => setEditing(true)}
            shape="circle"
            size="small"
            icon={<EditOutlined />}
          />
        ),
        <Button
          color="danger"
          variant="solid"
          onClick={onRemoveTodo}
          type="text"
          shape="circle"
          size="small"
          icon={<DeleteOutlined />}
        />,
      ]}
    >
      {editing ? (
        <Input
          value={inputText}
          onChange={handleChange}
          variant="borderless"
          ref={inputRef}
        />
      ) : (
        <span>{text}</span>
      )}
    </List.Item>
  );
};

export default TodoItem;
