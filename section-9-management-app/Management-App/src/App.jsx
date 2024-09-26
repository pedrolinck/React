import { useState } from "react"
import InitialView from "./components/InitialView"
import Sidebar from "./components/Sidebar"
import NewProject from "./components/NewProject"

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleAddProject(projectData){
    setProjectState(prevState => {
      const projectId =  Math.ramdom()
      const newProject = {
        ...projectData,
        id: projectId
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  let content;

  if(projectState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} />
  }else if(projectState.selectedProjectId === undefined){
    content = <InitialView onStartProject={handleAddProject} />
  }

  return(
    <div className="flex h-screen gap-8">
      <Sidebar 
        onStartProject = {handleAddProject}
        projects={projectState.projects}
      />
      {content}
    </div>
  )
}

export default App
