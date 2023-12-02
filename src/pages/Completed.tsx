import {useTypedSelector} from "../redux/store.ts";
import TodoList from "../components/TodoList/TodoList.tsx";

const Completed = () => {
  const todos = useTypedSelector(state => state.todos.todos);
  const completedTodos = todos.filter(todo => todo.completed === true);

  console.log(completedTodos);

  return (
    <TodoList todos={completedTodos}/>
  );
};

export default Completed;