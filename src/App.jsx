import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

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

function handleCancelAddProject() {
  setProjectState(prevState => {

    return {
      ...prevState, 
      selectedProjectId: undefined,

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
          ...prevState, 
          projects: [...prevState.projects, newProject]
        }
      }
    )
  }

 function handleSelectProject(id) {
  setProjectState(prevState => {

    return {
      ...prevState, 
      selectedProjectId: id,

    }
  })
 }

 const handleDeleteProject = () => {
    setProjectState(prevState => {
      return {
        ...prevState, 
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId),
        selectedProjectId: undefined,
      }
    })
 }


  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject}/>; 

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} onCancel={handleCancelAddProject}/>;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} projects={projectState.projects} onSelect={handleSelectProject} />
      {content}
      
      
    </main>
  );
}


export default App;
