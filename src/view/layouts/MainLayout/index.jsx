import React from 'react'
import { Footer, Header } from 'view/components'

export function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="main-container">
        {children}
      </main>
      <Footer />
    </>
  )
} 