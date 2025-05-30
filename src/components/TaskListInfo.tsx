import type { Task } from "../types"
interface Props {
  task: Task[];
}
const TaskListInfo = ({task} : Props) => {
  const completedCount = task.filter(task => task.status).length;
  const pendingCount = task.length - completedCount;
  return (
    <div className='tasks-info'>
            <h2>total tasks: <span> {task.length} </span> </h2>
            <h2>completed: <span> {completedCount}</span> </h2>
            <h2>pending: <span> {pendingCount}</span> </h2>
    </div>
  )
}
export default TaskListInfo