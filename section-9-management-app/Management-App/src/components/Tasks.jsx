/* eslint-disable react/prop-types */
import NewTask from "./NewTask";

export default function Tasks({tasks, onAdd, onDelete}){
  return (
    <section>
      <h2 className="text-2x1 font-bold text-stone-700 mb-4">tasks</h2>
      new tasks
      <NewTask onAdd={onAdd} /> 
      { tasks.length === 0 && (<p className="text-stone-800 mb-4">no have tasks</p>)}
      {tasks.length > 0 && 
      <ul  className="p-4 mt-8 rounded-md bg-stone-100" >
        {tasks.map((task) => 
        <li className="flex justify-between my-4" key={task.id}>
          <span>{task.text}</span>
          <button onClick={() => onDelete(task.id)} className="text-stone-700 hover:text-red-500">Clear</button>
        </li>)}
      </ul>}
    </section>
  )
}