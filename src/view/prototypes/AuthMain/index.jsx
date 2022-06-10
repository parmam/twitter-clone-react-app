import React from 'react'
import { Button, SVG } from 'view/elements'

export function AuthMain() {
    return (
        <>
            <div 
                className='auth-wrapper' 
            >
                <div className='logo-container'>
                    <SVG variant='twitter-logo' />
                </div>
                <h1 className='auth-title'>
                    Lo que está pasando ahora
                </h1>
                <h3 className='auth-subtitle'>
                    Únete a Twitter hoy mismo.
                </h3>
                <Button type='button' variant='sign-in-google' >
                    <div className='google-content'>
                        <div className='icon-container'>
                            <SVG variant={'sign-in-google'}/>
                        </div>
                        <span className='button-text'>Sign in with Google</span>
                    </div>
                </Button>
                <Button type='submit' variant='sign-in-apple' >
                    <div className='apple-content'>
                        <div className='icon-container'>
                            <SVG variant={'sign-in-apple'} />
                        </div>
                        <span className='button-text'>Sign in with Apple</span>
                    </div>
                </Button>
                <Button type='button' variant='primary' >
                    <div className='phone-content'>
                        <span className='button-text'>
                            Register with phone number  
                        </span>
                    </div>
                </Button>
                <span className='terms-and-conditions-text'>Signing up, you agree to the Terms of Service and Privacy Policy, including the Use of Cookies policy.</span>
            </div>
        </>
    )
}