import React from 'react'

export function AuthLayout({ children }) {
    return (
        <>
            <main className='flex flex-row'>
                <div className='sm:w-0 md:w-0 lg:w-3/5 xl:w-3/5 h-screen'>
                    
                </div>
                <div className='bg-slate-100 sm:w-full md:w-full lg:w-2/5 xl:w-2/5 flex items-center justify-center h-screen'>
                    { children }
                </div>
            </main>
        </>
    )
}