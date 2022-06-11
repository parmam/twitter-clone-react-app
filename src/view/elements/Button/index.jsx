import React from 'react'
import './button.css'

export function Button({type, action, children, variant }) {
    const getClassName = variant => {
        const classes = {
            'primary': 'primary',
            'secondary': 'secondary',
            'default' : 'default',
            'sign-in-google': 'sign-in-google',
            'sign-in-apple': 'sign-in-apple',
            'rounded-cc': 'rounded-cc',
        }
        return classes[variant] || classes['default']
    }
    const buttonClassName = getClassName(variant)
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