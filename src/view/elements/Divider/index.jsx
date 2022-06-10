import React from 'react'

export function Divider({variant}) {

    const getDividerVariant = variant => {
        const types = {
            'defalt': 'default',
            'or': 'or',
        }
        return types[variant] || types['default']
    }
    const dividerVariant = getDividerVariant(variant)

    return (
        (dividerVariant === 'or') 
        ? (
            <>
                <div className='or'></div>
                <span>or</span>
                <div></div>
            </>
        )
        : (
            <div className={dividerVariant}></div>
        )
    )
}