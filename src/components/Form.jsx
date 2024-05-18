/* eslint-disable react/prop-types */
import { useState } from "react"

const Form = ( { tasks, setTasks } ) => {

  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    setTasks([...tasks, {id: Date.now(), task: value, completed: false}])

    console.log(tasks)

    setValue("")
  }


  return (
    <form onSubmit={handleSubmit} className="w-[40%] flex gap-2 mb-8">
      <input onChange={(e) => setValue(e.target.value)} value={value} className="w-[80%] border-2 px-4 py-2 rounded-xl" type="text" placeholder="Enter task here: " />
      <button className="w-[20%] px-4 py-2 rounded-xl border-none text-white bg-[#111]" type="submit">Add</button>
    </form>
  )
}

export default Form
