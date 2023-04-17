import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({bgColor, color, size, text, borderRadius, icon, bgHoverCoor, width}) => {
    
    const { setIsClicked, isClicked} = useStateContext();
    
    return (
        <button 
            type='button'
            onClick = {() => setIsClicked({...isClicked, chat: false,
                cart: false,
                useProfile: false,
                Notification: false})}
            style={{backgroundColor: bgColor, color, borderRadius}}
            className={`text-${size} w-${width} p-3 hover:drop-shadow-xl hover:bg-${bgHoverCoor}`}>
                {icon} {text}
        </button>

    )
}

export default Button