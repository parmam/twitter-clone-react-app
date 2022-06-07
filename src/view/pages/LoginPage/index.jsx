import React from 'react'
import { LoginForm } from 'view/components'
import { AuthLayout } from 'view/layouts'

export function LoginPage() {
    return (
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    )
}