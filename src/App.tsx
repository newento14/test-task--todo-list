import {Route, Routes} from "react-router-dom";
import Active from "./pages/Active.tsx";
import Completed from "./pages/Completed.tsx";
import All from "./pages/All.tsx";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setTodos} from "./redux/reducers/todosSlice.ts";

const routes = [
  {
    path: '/',
    component: All,
    exact: true
  },
  {
    path: '/active',
    component: Active
  },
  {
    path: '/completed',
    component: Completed
  }
]

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTodos = async () => await fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=50')

    if (localStorage.getItem('todos') === null) {
      fetchTodos()
        .then(response => response.json())
        .then(data => localStorage.setItem('todos', JSON.stringify(data)))
        .then(() => dispatch(setTodos(JSON.parse(localStorage.getItem('todos') || '{}'))))

    }

    if (localStorage.getItem('todos') !== null) {
      dispatch(setTodos(JSON.parse(localStorage.getItem('todos') || '{}')))
    }
  }, [])

  return (
    <>
      <Routes>
        {routes.map(({path, component: Component}) => (
          <Route key={path} path={path} element={<Component/>}/>
        ))}
      </Routes>
    </>
  )
}

export default App
