import React, { useEffect, useState } from 'react'
import Counter from '../counter/Counter';
import TextInput from './TextInput';

export default function Text() {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }
    return (
        <div>
            {/* {show && <Counter />} */}
            {show && <TextInput />}
            <button onClick={handleShow}>{show ? "Ocultar" : "Mostrar"}</button>
        </div>
    )
}
