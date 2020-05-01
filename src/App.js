import React, { useState, useEffect } from 'react'
import './App.css';
import Picture from './Picture'
import { observe } from './State'

function App() {

    const [pictures, setPictures] = useState([]);

    useEffect(() => observe((newPictures) => {setPictures(newPictures)}))

    return (
        <div className="App">
            { pictures.map((pic, i) => {
                return (<Picture key={i} pic={pic}/>)
            })}
        </div>
    );
}

export default App;
