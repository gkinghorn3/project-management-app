import { useState } from "react";
import NewTask from "./NewTask";


export default function Tasks() {

    const [tasks, setTasks] = useState([])

    const handleAddTask = (task) => {
        setTasks(prevState => {
            return [...prevState, task]
        })
        
    }

    const handleDeleteTask = (task) => {
        setTasks(prevState => {
            return prevState.filter(taskItem => taskItem !== task)
        })
    }

    return <section>
        <h2 className="text-2xl font-bold trest-stone-700 mb-4">Tasks</h2>
        <p className="text-stone-800 my-4">This project does not have any tasks yet</p>
        <NewTask onAddTask={handleAddTask} />
        <ul>
            {
                tasks.map(task => 
                <li key={task}>
                    <button onClick={() => handleDeleteTask(task)} className="w-full my-4 font-bold">{task}</button>
                </li>)
            }
        </ul>
    </section>
}