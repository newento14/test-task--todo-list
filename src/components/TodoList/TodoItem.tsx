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
import {AnimatePresence, motion} from "framer-motion";

const TodoItem: React.FC<{ todo: ITodos }> = ({todo}) => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(todo.completed);

  const handleComplete = () => {
    setChecked(!checked);
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
    <motion.section
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 1.1, type: 'tween'}}
      className="text-white/70 flex justify-between items-center bg-main px-2 py-1 w-full group/item relative">
      <AnimatePresence>
        {checked && (
          <motion.div
            initial={{width: 0}}
            animate={{width: '100%'}}
            exit={{width: 0}}
            transition={{duration: 0.3, type: 'tween'}}
            className="absolute z-[999] left-0 top-0 h-[3px] bg-black bottom-0 my-auto"/>
        )}
      </AnimatePresence>
      <div className="flex items-center">
        <BpCheckbox checked={checked} onClick={handleComplete}/>
        <p className="max-w-[500px]">
          {todo.title}
        </p>
      </div>
      <div className="items-center justify-center flex px-2 gap-x-2">
        <button onClick={handleOpenModal}>
          <HiOutlinePencil size={25}/>
        </button>
        <button onClick={handleDelete}>
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
    </motion.section>
  );
};

export default TodoItem;