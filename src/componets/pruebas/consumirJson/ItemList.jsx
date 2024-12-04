import React from 'react'
import Item from './Item'

export default function ItemList({personas}) {
    return (
        <div> {
            personas.length > 0 &&
            personas.map((personas) => {
                return (
                    <Item key={personas.id} personas={personas}/>
                )
            })}
        </div>
    )
}
