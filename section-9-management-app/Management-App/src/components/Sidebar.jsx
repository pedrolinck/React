/* eslint-disable react/prop-types */
import Button from "./Button.jsx"

export default function Sidebar({onStartProject, projects, onSelectProject,
  selectedProjectId
}){

  return (
    <section className="pl-16 pr-16 py-8 mt-8 rounded-r-xl bg-black">
      <h2 className="uppercase font-bold md:text-xl text-slate-200">your projects</h2>
      <Button onClick={onStartProject}>+ Add Project</Button>
      <ul className="mt-8">
          {projects.map(project => {

            let classes = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-500 hover:text-slate-200"

            if(project.id === selectedProjectId){
              classes += ' bg-stone800 text-stone200'
            } else{
              classes += ' text-stone-400'
            }

            return( <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={classes}
              >
                {project.title}
              </button>
            </li>)
          }
       )}
      </ul>
    </section>
  )
}
