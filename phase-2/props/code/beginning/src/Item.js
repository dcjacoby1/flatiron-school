import React from 'react'
export default function Item (props) {
    return(
    <>
        <h2>{props.name} | {props.price}</h2>
    </>
    )
}
// can removeexport default Item