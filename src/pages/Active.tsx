import {useTypedSelector} from "../redux/store.ts";
import TodoList from "../components/TodoList/TodoList.tsx";


const Active = () => {
  const todos = useTypedSelector(state => state.todos.todos);
  const activeTodos = todos.filter(todo => todo.completed === false);

  return (
    <TodoList todos={activeTodos}/>
  );
};

export default Active;