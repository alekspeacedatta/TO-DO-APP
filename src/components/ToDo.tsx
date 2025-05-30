import SubContent from "./SubContent"
import ToDoHeader from "./ToDoHeader";
import { useState } from "react";

const ToDo = () => {

  const tasks = [
    {id: 1, title: "Learn HTML And CSS", status: true},
    {id: 2, title: "Learn CSS", status: false},
    {id: 3, title: "Learn HTML", status: false},
  ]
  const [task, setTask] = useState(tasks);
  const [nextId, setId] = useState(tasks.length + 1);

  return (
    <div className="todo">
        <ToDoHeader/>
        <SubContent task={task} setTask={setTask} nextId={nextId} setId={setId}/>
      </div>
  )
}
export default ToDo;