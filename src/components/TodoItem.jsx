import { Button, Checkbox, Input, List, Space } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useRef, useState } from "react";

const TodoItem = ({ text, status, onRemoveTodo, onEditTodo, onChangeStatus }) => {
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
      <Space>
        <Checkbox
          checked={status}
          onChange={(e) => onChangeStatus(e.target.checked)}
        />
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
      </Space>
    </List.Item>
  );
};

export default TodoItem;
