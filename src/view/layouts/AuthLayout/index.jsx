import React from 'react'

import { Button, SVG, Divider } from 'view/elements'

export function AuthLayout({ children }) {
    return (
        <>
            <main className='auth-wraper'>
                <div className='brand-container'>
                    <img 
                        src='https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png' 
                        alt="Twitter," 
                        className='brand-image'
                    />
                    <div className='brand-logo-contaianer'>
                        <SVG variant='twitter-logo' />
                    </div>
                </div>
                <div className='auth-container'>
                    <div className='auth-wrapper'>
                        <div className='logo-container'>
                            <SVG variant='twitter-logo' />
                        </div>
                        <h1 className='auth-title'>
                            What is happening now
                        </h1>
                        <h3 className='auth-subtitle'>
                            Join Twitter today.
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
                            <div className='text-content'>
                                <span className='button-text text-white'>
                                    Sign in with phone number  
                                </span>
                            </div>
                        </Button>
                        <span className='terms-and-conditions-text'>Signing up, you agree to the Terms of Service and Privacy Policy, including the Use of Cookies policy.</span>
                        <Divider variant='or' />
                        <h5 className='have-account-text'>
                            Do you already have an account?
                        </h5>
                        <Button variant='rounded-cc'>
                            <div className='text-content'>
                                <span className='button-text'>
                                    Sign up
                                </span>
                            </div>
                        </Button>
                    </div>
                </div>
            </main>
        </>
    )
}