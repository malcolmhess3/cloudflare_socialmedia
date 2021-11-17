import React from 'react'

// Button component to allow buttons to change color, text, and onclick function
const Button = ({text, color, onClick}) => {
    return (
        <button className="btn" onClick={onClick} style={{backgroundColor: color}}>{text}</button>
    )
}

export default Button