import {useTypedSelector} from "../redux/store.ts";
import TodoList from "../components/TodoList/TodoList.tsx";


const Active = () => {
  const todos = useTypedSelector(state => state.todos.todos);
  const activeTodos = todos.filter(todo => todo.completed === false);

  console.log(activeTodos)
  return (
    <TodoList todos={activeTodos}/>
  );
};

export default Active;