import React, { useEffect, useState } from 'react'
import data from "../../../data/datos(personas).json"
export default function ItemListContainer() {
    const [personas, setPersonas] = useState([]);

    const pedirDatos = () => {
        return new Promise((resolve, reject) => {
            resolve(data);
        })
    }
    useEffect(()=>{
        pedirDatos()
        .then((res) => {
            setPersonas(res);
            console.log(personas);
        });
    },[])
  
    return (
        <div>
            { personas.length>0 &&
                personas[0].name
            }
        </div>
    )
}
