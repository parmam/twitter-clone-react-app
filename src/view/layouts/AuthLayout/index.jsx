import React from 'react'

import { SVG, NavItem } from 'view/elements'
import { Footer } from 'view/components'
import { navigation } from 'lib/_mock'

export function AuthLayout({ children }) {
    return (
        <main>
            <section className='auth-wrapper'>
                <div className='brand-container'>
                    <img 
                        src='https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png' 
                        alt="Twitter," 
                        className='brand-image'
                    />
                    <div className='brand-logo-container'>
                        <SVG variant='twitter-logo' />
                    </div>
                </div>
                <div className='auth-container'>
                    {children}
                </div>
            </section>
            <Footer>
                <nav >
                    <ul className='landing-nav-container'>
                        {
                            navigation.footerItems.map((item, index) => (
                                <NavItem key={index} item={item} />
                            ))
                        }
                    </ul>
                </nav>
            </Footer>
        </main>

    )
}