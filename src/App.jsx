import { useEffect, useState } from "react"
import Form from "./components/Form"
import Todo from "./components/Todo"

function App() {

  const [tasks, setTasks] = useState([])

  // useEffect(() => {
  //   if (tasks?.length < 1) return;
  //   localStorage.setItem("tasks", JSON.stringify(tasks))
  // }, [tasks])

  // useEffect(() => {
  //   const storedTasks = localStorage.getItem("tasks");
  //   let loadedTasks = [];
    
  //   if (storedTasks) {
  //     loadedTasks = JSON.parse(storedTasks);
  //   }
  
  //   setTasks(loadedTasks);
  // }, []);

  return (
      <div className="flex flex-col items-center w-screen justify-center">
        <h1 className="font-medium text-5xl m-10 w-[35%] text-center">Todo App</h1>
        <Form setTasks={setTasks} tasks={tasks} />
        {
          tasks?.map((task) => (
            <Todo key={task.id} setTasks={setTasks} tasks={tasks} task={task} />
          ))
        }
      </div>
  )
}

export default App
