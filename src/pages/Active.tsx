import {useTypedSelector} from "../redux/store.ts";


const Active = () => {
  const todos = useTypedSelector(state => state.todos.todos);
  const activeTodos = todos.filter(todo => todo.completed === false);

  console.log(activeTodos)
  return (
    <div>

    </div>
  );
};

export default Active;