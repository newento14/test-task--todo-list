import {Pagination} from "@mui/material";
import React from "react";
import {ITodos} from "../../types/todos.ts";

interface TodoListProps {
  todos: ITodos[],

}

const TodoList: React.FC<TodoListProps> = () => {
  return (
    <div>

      <Pagination count={10} hidePrevButton hideNextButton />
    </div>
  );
};

export default TodoList;