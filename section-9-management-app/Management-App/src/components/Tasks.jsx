import NewTask from "./NewTask";

export default function Tasks(){
  return (
    <section>
      <h2 className="text-2x1 font-bold text-stone-700 mb-4">tasks</h2>
      new tasks
      <NewTask /> 
      <p className="text-stone-800 mb-4">no have tasks</p>
      <ul>

      </ul>
    </section>
  )
}