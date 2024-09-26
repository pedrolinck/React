/* eslint-disable react/prop-types */
import { forwardRef } from "react"

export default forwardRef(function Input({textarea, label, ...props }, ref){
  const classes = "w-full p-1 border-b-1 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none"
  return (
    <div>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
        {textarea ? 
          <textarea ref={ref} className={classes} {...props} /> 
          : 
          <input ref={ref} className={classes} {...props}/>}
      </p> 
    </div>
  )
});