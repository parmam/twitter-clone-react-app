import React from 'react'
import { AuthLayout } from 'view/layouts'
import { Button, Divider, SVG } from 'view/elements'

export function AuthPage() {
    return (
        <AuthLayout>
            <div className='logo-container'>
                <SVG variant='twitter-logo' />
            </div>
            <h1 className='auth-title'>
                Happening now
            </h1>
            <h3 className='auth-subtitle'>
                Join Twitter today.
            </h3>
            <div className='auth-options'>
                <Button type='button' variant='sign-in-google' >
                    <div className='google-content'>
                        <div className='icon-container'>
                            <SVG variant='sign-in-google'/>
                        </div>
                        <span className='button-text'>Sign in with Google</span>
                    </div>
                </Button>
                <Button type='submit' variant='sign-in-apple' >
                    <div className='apple-content'>
                        <div className='icon-container'>
                            <SVG variant='sign-in-apple' />
                        </div>
                        <span className='button-text'>Sign in with Apple</span>
                    </div>
                </Button>
                <Divider variant='or'/>
                <Button type='button' variant='primary' >
                    <div className='text-content text-white'>
                        <span className='button-text'>
                            Sign up with phone or email  
                        </span>
                    </div>
                </Button>
                <span className='terms-and-conditions-text'>Signing up, you agree to the Terms of Service and Privacy Policy, including the Use of Cookies policy.</span>
                <h4 className='have-account-text'>Alredy have an account?</h4>
                <Button type='button' variant='rounded-cc' >
                    <div className='text-content text-twitter-primary-light'>
                        <span className='button-text'>
                            Sign in  
                        </span>
                    </div>
                </Button>
            </div>
        </AuthLayout>
    )
}