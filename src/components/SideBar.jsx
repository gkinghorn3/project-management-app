import { ListPlus } from "lucide-react";

import Button from "./Button";

export default function Sidebar({onStartAddProject, projects}) {

    return (
        <aside className="w-1/3 min-w-max md:w-72 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-lg">
            <h2 className="text-3xl mb-8 font-bold uppercase text-stone-200 ">Your Projects</h2>
            <div>   
                <Button onClick={onStartAddProject} className="flex gap-3 px-4 py-2 rounded-lg text-sm md:text-base bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
                   <span><ListPlus /></span> <span>Add project</span>
                </Button>
            </div>
            <ul>
                {
                    projects.map(
                        (project) => (
                            <li className="my-8 bg-stone-300 rounded-md p-4" key={project.id} >
                                <h3 className="font-bold text-stone-800">{project.title}</h3>
                                <p className="text-sm text-stone-800">{project.description}</p>
                                <p className="font-italic text-stone-800">{project.dueDate.toString()}</p>
                            </li>
                        )
                    )
                }
            </ul>
        </aside>
    )

}