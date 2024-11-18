import React, { useContext } from "react";
import { Button, Space } from "antd";
import { TodosContext } from "../store/todos-context";

const FilterButtons = () => {
  const todosCtx = useContext(TodosContext);

  const handleFilterChange = (filter) => {
    todosCtx.setFilter(filter);
  };

  return (
    <Space>
      <Button
        onClick={() => handleFilterChange("all")}
        type={todosCtx.filter === "all" ? "primary" : "default"}
      >
        all
      </Button>
      <Button
        onClick={() => handleFilterChange("done")}
        type={todosCtx.filter === "done" ? "primary" : "default"}
      >
        done
      </Button>
      <Button
        onClick={() => handleFilterChange("ongoing")}
        type={todosCtx.filter === "ongoing" ? "primary" : "default"}
      >
        ongoing
      </Button>
    </Space>
  );
};

export default FilterButtons;
