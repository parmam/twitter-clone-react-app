import React, { useEffect } from 'react'
import { MainLayout } from 'view/layouts'
import { useAuth } from 'lib/contexts'

export function HomePage() {
    const { getSessionFromStorage, token } = useAuth()
    useEffect(() => {
        getSessionFromStorage()
    },[token])

    return (
        <MainLayout>
            home page
        </MainLayout>
    )
}