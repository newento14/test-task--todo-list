import {Route, Routes} from "react-router-dom";
import Active from "./pages/Active.tsx";
import Completed from "./pages/Completed.tsx";
import All from "./pages/All.tsx";

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



  return (
    <>
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component/>} />
        ))}
      </Routes>
    </>
  )
}

export default App
