import {createTheme, Pagination, ThemeProvider} from "@mui/material";
import React from "react";
import {ITodos} from "../../types/todos.ts";
import TodoItem from "./TodoItem.tsx";
import {deepPurple} from "@mui/material/colors";

const theme = createTheme({
  palette: {
    secondary: {
      main: deepPurple[500],

    }
  },
});

interface TodoListProps {
  todos: ITodos[],
}

const TodoList: React.FC<TodoListProps> = ({todos}) => {
  const [page, setPage] = React.useState(0);
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(Number(value) - 1);
  }

  return (
    <div className="w-full h-full text-white/70 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full h-full max-w-[700px]">
        {todos.filter((_, i) => i >= page * 10 && i < (page + 1) * 10).map(todo => (
          <TodoItem todo={todo} key={todo.id}/>
        ))}
      </div>
      <ThemeProvider theme={theme}>
        <Pagination onChange={handlePageChange} color={'secondary'} count={Math.ceil(todos.length / 10)}
                    variant={'text'}/>
      </ThemeProvider>
    </div>
  );
};

export default TodoList;