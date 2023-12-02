import {useRef, useState} from "react";
import {ITodos} from "../../types/todos.ts";
import BpCheckbox from "../CheckBox.tsx";

import {MdDeleteOutline} from "react-icons/md";
import {HiOutlinePencil} from "react-icons/hi2";
import {useDispatch} from "react-redux";
import {removeTodo, updateTodo} from "../../redux/reducers/todosSlice.ts";
import TodoModal from "../Modal.tsx";
import Typography from "@mui/material/Typography";
import {TextField} from "@mui/material";

const TodoItem: React.FC<{ todo: ITodos }> = ({todo}) => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [visible, setVisible] = useState(false);


  const handleComplete = () => {
    dispatch(updateTodo({...todo, completed: !todo.completed}));
  }

  const handleEditTodo = () => {
    dispatch(updateTodo({...todo, title: inputRef?.current?.value}))
    setVisible(false);
  }

  const handleOpenModal = () => {
    setVisible(true);
  }

  const handleDelete = () => {
    dispatch(removeTodo(todo));
  }

  return (
    <section
      className="text-white/70 flex justify-between items-center bg-cyan-600 w-full group/item">
      <div className="flex items-center">
        <BpCheckbox checked={todo.completed} onClick={handleComplete}/>
        <p className="max-w-[500px]">
          {todo.title}
        </p>
      </div>
      <div className="items-center justify-center hidden group-hover/item:flex px-2">
        <button className="bg-purple" onClick={handleOpenModal}>
          <HiOutlinePencil size={25}/>
        </button>
        <button className="bg-purple" onClick={handleDelete}>
          <MdDeleteOutline size={25}/>
        </button>
      </div>
      {visible && (<TodoModal open={visible} setOpen={setVisible}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          EDIT TODO
        </Typography>
        <TextField inputRef={inputRef} defaultValue={todo.title} id="standard-basic" label="Title" variant="standard"/>
        <div className="flex justify-between gap-x-6 mt-6">
          <button onClick={handleEditTodo} className="bg-green-400 text-white px-2 py-1">
            CHANGE
          </button>
        </div>
      </TodoModal>)}
    </section>
  );
};

export default TodoItem;