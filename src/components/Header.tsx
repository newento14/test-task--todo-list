import {Link} from "react-router-dom";
import {useRef, useState} from "react";
import TodoModal from "./Modal.tsx";

import {IoMdAdd} from "react-icons/io";
import Typography from "@mui/material/Typography";
import {TextField} from "@mui/material";
import {addTodo} from "../redux/reducers/todosSlice.ts";
import {useDispatch} from "react-redux";

const links = [
  {
    href: '/',
    label: 'All',
  },
  {
    href: '/active',
    label: 'Active',
  },
  {
    href: '/completed',
    label: 'Completed',
  },
]

const Header = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [visible, setVisible] = useState(false);

  const handleAddTodo = () => {
    dispatch(addTodo({userId: 1, id: Date.now(), title: inputRef?.current?.value, completed: false}))
    setVisible(false);
  }

  const handleOpenModal = () => {
    setVisible(true);
  }

  return (
    <header
      className="bg-secondary text-white/70 uppercase h-[50px] flex justify-end max-sm:justify-center items-center border-b-[1px] border-purple fixed w-full z-[1000] px-4">
      <nav className="flex gap-x-4">
        <ul className="absolute max-sm:static top-0 left-0 bottom-0 right-0 m-auto flex justify-center items-center gap-x-4 w-fit">
          {links.map(({href, label}) => (
            <li key={label} className="hover:text-purple transition-all duration-300">
              <Link to={href}>{label}</Link>
            </li>
          ))}
        </ul>
        <button className="flex items-center gap-x-2 bg-purple py-1 px-2 cursor-pointer" onClick={handleOpenModal}>
          <IoMdAdd/>
          <p>Add</p>
        </button>
        {visible && <TodoModal open={visible} setOpen={setVisible}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ADD NEW TODO
          </Typography>
          <TextField inputRef={inputRef} id="standard-basic" label="Title" variant="standard"/>
          <div className="flex justify-between gap-x-6 mt-6">
            <button onClick={handleAddTodo} className="bg-green-400 text-white px-2 py-1">
              ADD
            </button>
          </div>
        </TodoModal>}
      </nav>
    </header>
  );
};

export default Header;