import { useState }  from "react";

function Student (){
    const[nom , setNom] = useState("")
    function greet(name){
        setNom(name)
    }
    return (
        <>
        <button onClick={()=>greet("rania")} className="bg-pink-500 text-white-500">click</button>
        <p> welcome {nom} </p>
        </>
    )
}
export default Student