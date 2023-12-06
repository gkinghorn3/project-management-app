import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/SideBar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

function handleStartAddProject() {
  setProjectState(prevState => {

    return {
      ...prevState, 
      selectedProjectId: null,

    }
  })
}


  const handleAddProject = (projectData) => {
    setProjectState(
      (prevState) => {

        const newProject = {
          ...projectData, 
          id: Math.random().toString()
        }

        return {
          prevState, 
          projects: [...prevState.projects, newProject]
        }
      }
    )
  }




  let content; 

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject}/>;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} projects={projectState.projects} />
      {content}
      
      
    </main>
  );
}

export default App;
