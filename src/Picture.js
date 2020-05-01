import React from 'react'
import './Picture.css';

import {  useDrop  } from 'react-dnd'
import Image from './Image'
import ItemTypes from './ItemTypes'
import { movePicture } from './State'

const Picture = ({ pic }) => {

    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.PICTURE,
        drop: (item, monitor) => { movePicture(monitor.getItem().name, pic.name) },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    })

    return (
        <div className="imageWrap" ref={drop}>
            <Image url={ pic.url } name={ pic.name } />
            <span>{ pic.name }</span>
        </div>
    )
};

export default Picture