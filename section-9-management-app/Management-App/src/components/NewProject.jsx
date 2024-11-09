/* eslint-disable react/prop-types */

import { useRef } from "react"
import Input from "./Input"
import Modal from "./Modal";

export default function NewProject({onAdd, onCancel}){

  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  

  function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    })

    if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
      modal.current.open();
      return;
    }
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay"> 
        <h2  className="text-xl font-bold  my-4">Invalid Input</h2>
        <p>Oops ... looks like you forget to enter a value.</p>
        <p>Please make shure you provide a valid value for every input field</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex intems-center justify-end gap-4 my-4">
          <li>
            <button onClick={onCancel} className="text-stone-800 hover:text-slate-950">Cancel</button>
          </li>
          <li>
            <button onClick={handleSave} className="">Save</button>
          </li>
        </menu>
        <div className="flex flex-col gap-4">
          <Input type="text" ref={title} label="Title"/>
          <Input ref={description} label="Description" textarea/>
          <Input type="date" ref={dueDate} label="Due Date"/>
        </div>
      </div>
    </>
  );
}