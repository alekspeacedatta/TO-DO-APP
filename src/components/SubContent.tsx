import AddTask from "./AddTask"
import TaskListInfo from "./TaskListInfo"
import TasksList from "./TasksList"
import type { Task } from "../types"
interface Props {
  task: Task[];
  setTask: React.Dispatch<React.SetStateAction<Task[]>>;
  nextId: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
}

const SubContent = ({task, setTask, nextId, setId}: Props) => {
  return (
    <section className='sub-content'>
          <AddTask task={task} setTask={setTask} nextId={nextId} setId={setId}/>
          <TaskListInfo task={task}/>
          <TasksList task={task} setTask={setTask}/>
    </section>
  )
}
export default SubContent