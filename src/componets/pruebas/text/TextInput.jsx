import React, { useEffect, useState } from 'react'

export default function TextInput() {
    const[text, setText]=useState("");
    const handleText=(e)=>{
        setText(e.target.value);
    }
    useEffect(()=>{
        //cuando se monta el componente
        console.log("montado");
        
        //cuando se desmonta el componente
        return ()=>{
            console.log("desmontado");
        }
    },[]);
    //cuando el elemento que se le pasa por el array es actualizado
    useEffect(()=>{
        //cuando se monta el componente
        console.log("text modificado");                
    },[text]);
  return (
    <div>
        <input onChange={handleText} type="text" />
        <h2>{text}</h2>
    </div>
  )
}
