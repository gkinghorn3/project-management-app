import { ListPlus } from "lucide-react";

import Button from "./Button";

export default function Sidebar({onStartAddProject, projects, onSelect, selectedProjectId}) {

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
                        (project) => {

                            let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-4  hover:bg-stone-300 hover:text-stone-700"

                            if (selectedProjectId === project.id) {
                                cssClasses += " bg-stone-300 text-stone-700"
                            } else {
                                cssClasses += " text-stone-100"
                            }

                            return (<li className="" key={project.id} >
                                <button className={cssClasses}
                                onClick={() => onSelect(project.id)}
                                >
                                    {project.title}
                                </button>
                            </li>)
                        }
                    )
                }
            </ul>
        </aside>
    )

}