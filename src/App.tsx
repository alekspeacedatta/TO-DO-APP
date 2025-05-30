import { use, useState } from 'react'
import './App.css'

function App() {
  const tasks = [
    {id: 1, title: "Learn HTML And CSS", status: true},
    {id: 2, title: "Learn CSS", status: false},
    {id: 3, title: "Learn HTML", status: false},
  ]
  const [nextId, setId] = useState(tasks.length + 1);
  const [task, setTask] = useState(tasks);
  const [newTaskTitle, setNewTaskTitle] = useState('');


  const addTask = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if(!newTaskTitle.trim) return;
    setId(nextId + 1);
    const newTask = {
      id: nextId,
      title: newTaskTitle,
      status: false
    }
    setTask([...task, newTask]);
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
  const completedCount = task.filter(t => t.status).length;
  const pendingCount = task.length - completedCount;
  const isCompleted = (id: number) => {
    setTask(prev => prev.map(task => task.id === id ? {...task, status: !task.status}: task));
  }
  return (
    <>
      <div className="todo">
        <header>
          <h1>📝 My Todo App </h1>
          <p> Stay organized and get things done! </p>
        </header>
        <section className='sub-content'>
          <form onSubmit={addTask}>
            <input type="text" onChange={(e) => setNewTaskTitle(e.target.value)} />
            <button type='submit'>Add Task</button>
          </form>
          <div className='tasks-info'>
            <h2>total tasks: <span> {task.length} </span> </h2>
            <h2>completed: <span> {completedCount}</span> </h2>
            <h2>pending: <span> {pendingCount}</span> </h2>
          </div>
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
        </section>
      </div>
    </>
  )
}

export default App
