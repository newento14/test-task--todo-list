import {useTypedSelector} from "../redux/store.ts";

const Completed = () => {
  const todos = useTypedSelector(state => state.todos.todos);
  const completedTodos = todos.filter(todo => todo.completed === true);

  console.log(completedTodos);

  return (
    <div>

    </div>
  );
};

export default Completed;