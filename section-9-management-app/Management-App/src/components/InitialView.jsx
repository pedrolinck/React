import Button from "./Button"

export default function InitialView(){
  return <div className="mt-24 text-center w-2/3">
    <img src="" alt="" className="w-16 h-16 object-contain mx-auto"/>
    <h2 className="text-xl font-bold  my-4">No Project Selected</h2>
    <p>Select a project or get started a new one</p>
    <p>
      <Button>Create new project</Button>
    </p>
  </div>
}