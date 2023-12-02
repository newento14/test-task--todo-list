import {useTypedSelector} from "../redux/store.ts";
import TodoList from "../components/TodoList/TodoList.tsx";


const All = () => {
  const todos = useTypedSelector(state => state.todos.todos);

  console.log(todos);
  return (
    <TodoList todos={todos}/>
  );
};

export default All;