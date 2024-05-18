/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

const Todo = ( { setTasks, tasks, task } ) => {

  const deleteHandler = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    // localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  const completeHandler = (id) => {
    const completedtasks = tasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task)
    setTasks(completedtasks);
    // localStorage.setItem("tasks", JSON.stringify(completedtasks));
  }

  const editHandler = (id, task) => {
    const editedText = window.prompt("Edit task: ", task)

    if (editedText) ( 
      setTasks(tasks.map((t) => t.id === id ? {...t,  task: editedText} : t))
    )

  }

  return (
    <div className="flex flex-col mb-2 w-[40%]">
      <main className={`flex px-4 py-2 ${task.completed ? 'bg-slate-400' : 'bg-green-400'} rounded-xl items-center justify-betweent`}>
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-4">
            <input className="cursor-pointer" onClick={() => completeHandler(task.id)} type="checkbox" />
            <h1 className={`font-medium text-lg ${task.completed ? 'line-through' : 'none' }`}>{task.task}</h1>
          </div>
          <div className="flex gap-2">
          {
            task.completed ? (
              <button disabled onClick={() => editHandler(task.id, task.task)} className="px-2 py-1 rounded-lg bg-slate-600 text-white">Edit</button>
            ) : (
              <button onClick={() => editHandler(task.id, task.task)} className="px-2 py-1 rounded-lg bg-blue-500 text-white">Edit</button>
            )
          }
              <button onClick={() => deleteHandler(task.id)} className="px-2 py-1 rounded-lg bg-red-600 text-white">Delete</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Todo;