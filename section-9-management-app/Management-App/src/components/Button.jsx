/* eslint-disable react/prop-types */

export default function Button({children, ...props}){
  return <button {...props} className="mt-8 bg-zinc-900 px-6 py-2 rounded-md ">{children}</button>
}