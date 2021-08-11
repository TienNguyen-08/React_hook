import React, { useState } from 'react';
import './colorbox.scss'

 function getRandomColor (){
    const colorlist = ['red', 'black', 'green', 'yellow', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 5);
    return colorlist[randomIndex];
}

function ColorBox(props) {
    const [color, setColor] = useState(()=>{
        const initColor = localStorage.getItem('box_color') || 'deeppink';
        console.log(initColor);
        return initColor;
    });
    function handleBoxClick() {
        //get random color ->set color
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor);
    }
    return (
        <div className='colorBox'
        style={{backgroundColor: color}}
        onClick={handleBoxClick}
        >
            Color box
        </div>
    );
}

export default ColorBox;