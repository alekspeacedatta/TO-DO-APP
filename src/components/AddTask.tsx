import { useState } from "react"
import type { Task } from "../types"
interface Props {
  task: Task[];
  setTask: React.Dispatch<React.SetStateAction<Task[]>>;
  nextId: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
}
const AddTask = ({task, setTask, nextId, setId}: Props) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const addTask = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if(!newTaskTitle.trim()) return;
    setId(nextId + 1);
    const newTask = {
      id: nextId,
      title: newTaskTitle,
      status: false
    }
    setTask([...task, newTask]);
  }
  return (
    <form onSubmit={addTask}>
        <input type="text" onChange={(e) => setNewTaskTitle(e.target.value)} />
        <button type='submit'>Add Task</button>
        <button onClick={() => {setTask([])}}>Remove All</button>
    </form>
  )
}
export default AddTask