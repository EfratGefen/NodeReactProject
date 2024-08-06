import React, {useState} from 'react';
import { render } from 'react-dom';

export default function Pictures(props) {

    const[IndImage,setIndImage]=useState(0);
    const CountImage=React.Children.count(props.children)

    function returnImage(index) {
        const currentImage=React.Children.toArray(props.children)[index];
        return React.cloneElement(currentImage);    
    }

    return(
        <>
        <button  
        disabled={IndImage===0}
        //  onClick={setIndImage(IndImage=>IndImage-1)}
        onClick={(e) => setIndImage(v => v - 1)}
        > תמונה קודמת
        </button>
        <button
        disabled={IndImage>=CountImage-1}
        //  onClick={setIndimage(IndImage=>IndImage+1)}
        onClick={(e) => setIndImage(v => v + 1)}
        >תמונה הבאה</button> 
        {returnImage(IndImage)};
        </>
       
    )
}