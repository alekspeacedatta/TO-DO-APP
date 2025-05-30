import type { Task } from "../types"
interface Props {
  task: Task[];
  setTask: React.Dispatch<React.SetStateAction<Task[]>>;
}
const TasksList = ({task, setTask}: Props) => {
  const isCompleted = (id: number) => {
    setTask(prev => prev.map(task => task.id === id ? {...task, status: !task.status}: task));
  }
  const deleteTask = (id: number) => {
    const newTasks = task.filter(task => task.id !== id);
    setTask(newTasks);
  }
  const editTaskTitle = (id: number) => {
    const editTask = task.find(task => task.id === id);
    if(!editTask) return;

    const result = prompt("Edit Task:", editTask.title);
    if(result !== null && result.trim() !== ""){
      setTask(prev => prev.map(task => task.id === id ? {...task, title: result} : task) )
    }
  }
  return (
    <ul>
        {task.map(task => (
            <li key={task.id} className={task.status ? 'completed' : ""}>
            <input type="checkbox" checked={task.status} onChange={() => {isCompleted(task.id)}}/>
            {task.title}
            <div  className={task.status ? 'completed btns' : "btns" }>
                <button onClick={() => {editTaskTitle(task.id)}}>Edit</button>
                <button onClick={() => {deleteTask(task.id)}}>delete</button>
            </div>
            </li>
        ))}
    </ul>
  )
}
export default TasksList