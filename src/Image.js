import React from 'react'
import {  useDrag  } from 'react-dnd'
import ItemTypes from './ItemTypes'

const Image = ({ url, name }) => {

    const [{ isDragging }, drag ] = useDrag({
        item: { type: ItemTypes.PICTURE,  name },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    })


    return (
        <div ref={drag}>
            <img width={100} src={ url } />
        </div>
    )
};

export default Image