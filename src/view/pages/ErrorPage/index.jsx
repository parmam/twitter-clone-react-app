import React from 'react'
import { MainLayout } from 'view/layouts'

export function ErrorPage() {
    return (
        <>
            <MainLayout>
                <h1 className='text-7xl'>Error 404</h1>
                <h3>Not found</h3>
            </MainLayout>
        </>
    )
}