import React, { useEffect, useState } from 'react'
import Counter from '../counter/Counter';

export default function Text() {
    const [show, setShow] = useState(true);
    const handleShow = () => {
        setShow(!show);
    }
    return (
        <div>
            {show && <Counter />}
            <button onClick={handleShow}>{show ? "Ocultar" : "Mostrar"}</button>
            {show && <h2>Valemia Boludo</h2>}            
        </div>
    )
}
