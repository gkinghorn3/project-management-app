 import { useState } from "react"
 
 export default function NewTask({onAddTask}) {

  const [enteredTask, setEnteredTask] = useState("")

    function handleChange(event) {
      setEnteredTask(event.target.value)
      console.log(enteredTask)
    }


    return (
        <div className="flex items-center gap-4">
            <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" value={enteredTask} onChange={handleChange}/> 
            <button onClick={() => onAddTask(enteredTask)} className="text-stone-700 hoever:text-stone-950 font-bold">Add Task</button>    
        </div>
    )

  }