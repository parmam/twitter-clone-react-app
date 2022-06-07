import React from 'react'
import './button.css'
export function Button({type, action, children, variant }) {
    const getClassName = variant => {
        const classes = {
            'primary': '.primary',
            'secondary': '.secondary',
            'default' : '.default',
        }
        return classes[variant] || classes['default']
    }
    const buttonClassName = getClassName(variant)
    console.log(buttonClassName)
    return (
        <button 
            className={buttonClassName} 
            onClick={action || null} 
            type={type || 'button'}
        >
            {children}
        </button>
    )
}