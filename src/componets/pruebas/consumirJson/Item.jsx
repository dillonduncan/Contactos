import React from 'react'

export default function Item({ personas }) {
    return (
        <div>
            <img src={personas.image} alt={personas.name} />
            <h2>Nombres y Apellido: <br /> {personas.name} {personas.last_name}</h2>
            <p>Email: {personas.email}</p>
        </div>
    )
}
