import Tasks from "./Tasks"

/* eslint-disable react/prop-types */
export default function SelectedProject({project, onDelete, onAddTask, onDeleteTask, tasks}){

  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <div className="w-[35erem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3x1 folt-bold text-slate-600 mb-2">
            {project.title}
          </h1>
          <button onClick={onDelete} className="text-stone-600 hover:text-stone-950">delete</button>
          <p className="mb-4 text-stone-400">{formattedDate}</p>  
          <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
        </div>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks}/>
    </div>
  )
}