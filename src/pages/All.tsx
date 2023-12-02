import {useTypedSelector} from "../redux/store.ts";


const All = () => {
  const todos = useTypedSelector(state => state.todos.todos);

  console.log(todos);
  return (
    <div>

    </div>
  );
};

export default All;