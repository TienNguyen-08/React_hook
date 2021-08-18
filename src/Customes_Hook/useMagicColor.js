import React, {
    useEffect,
    useRef,
    useState
} from 'react';

function randomColor(currentColor) {
    const listColor = ['red', 'green', 'yellow'];

    const currentIndex = listColor.indexOf(currentColor);
    let newIndex = currentIndex;
    while(currentIndex === newIndex){
        newIndex  = Math.trunc(Math.random() * 3);
    }
    return listColor[newIndex];
}

function useMagicColor(props) {
    const [
        color,
        setColor
     ] = useState('red');
     const colorRef = useRef('red');
    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = randomColor(colorRef.current);
            setColor(newColor);
            colorRef.current = newColor;
        }, 1000);
        return () => {
            clearInterval(colorInterval);
        }
    }, []);
    return color;
}

export default useMagicColor;