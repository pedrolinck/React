/* eslint-disable react/prop-types */
export default function Input({textarea, label, ...props }){
  return (
    <div>
      <p>
        <label>{label}</label>
        {textarea ? <textarea {...props} /> : <input {...props}/>}
      </p>
    </div>
  )
}