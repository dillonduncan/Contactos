import React, { useEffect, useState } from 'react'
import obtenerPersonas from './obtenerPersonas';
import ItemList from './ItemList';

export default function ItemListContainer() {
    const [personas, setPersonas] = useState([]);

    useEffect(() => {
        obtenerPersonas()
            .then((res) => {
                setPersonas(res);
                console.log(personas);
            });
    }, [])

    return (
        <div>
            <ItemList personas={personas} />
        </div>
    )
}
