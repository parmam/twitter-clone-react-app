import React from 'react'

import { SVG } from 'view/elements'

export function AuthLayout({ children }) {
    return (
        <>
            <main className='auth-wraper'>
                <div className='image-container'>
                    <img 
                        src='https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png' 
                        alt="Twitter," 
                        className='auth-image'
                    />
                    <div className='logo-contaianer'>
                        <SVG variant='twitter-logo' />
                    </div>
                </div>
                <div className='auth-container'>
                    { children }
                </div>
            </main>
        </>
    )
}