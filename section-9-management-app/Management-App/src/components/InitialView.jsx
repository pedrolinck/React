/* eslint-disable react/prop-types */
import Button from "./Button"

export default function InitialView({onStartProject}){
  return <div className="mt-24 text-center w-2/3">
    <img src="" alt="" className="w-16 h-16 object-contain mx-auto"/>
    <h2 className="text-xl font-bold  my-4">No Project Selected</h2>
    <p className="text-stone-400 mb-4">Select a project or get started a new one</p>
    <p className="text-stone-400 mb-4">
      <Button onClick={onStartProject}>Create new project</Button>
    </p>
  </div>
}