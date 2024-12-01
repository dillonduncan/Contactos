import { useEffect, useState } from "react";

export default function Counter() {
    const [number, setNumber] = useState(0);
    const sumar = () => {
        setNumber(number + 1);
    }
    const restar = () => {
        setNumber(number - 1);
    }
    return (
        <div>
            <h3>{number}</h3>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <hr />
        </div>
    )
}
