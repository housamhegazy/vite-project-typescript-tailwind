import React from "react"
type props = {
 children:React.ReactNode
}
const Htext = ({children}:props)=>{
    return (
         <h1 className='basis-3/5 font-montserrat text-3xl font-bold'>
             {children}
         </h1>
    )
}
export default Htext