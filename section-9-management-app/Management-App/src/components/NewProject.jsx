import Input from "./Input"

export default function NewProject(){
  return (
   <div className="w-[35rem] mt-16">
    <menu className="flex intems-center justify-end gap-4 my-4">
      <li><button className="text-stone-800 hover:text-slate-950">Cancel</button></li>
      <li><button className="">Save</button></li>
    </menu>
    <div className="flex flex-col gap-4">
      <Input label="Title"/>
      <Input label="Description" textarea/>
      <Input label="Due Date"/>
    </div>
   </div>
  )
}