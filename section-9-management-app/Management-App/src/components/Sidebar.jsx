/* eslint-disable react/prop-types */
import Button from "./Button.jsx"

export default function Sidebar({children}){
  return (
    <section className="pl-16 pr-16 py-8 mt-8 rounded-r-xl bg-black">
      <h2 className="uppercase font-bold md:text-xl text-slate-200">your projects</h2>
      <Button>{children}</Button>
    </section>
  )
}
