import React from 'react'
import { Footer, Header } from 'view/components'

export function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="bg-slate-600 w-full h-auto flex justify-center flex-col">
        {children}
      </main>
      <Footer />
    </>
  )
} 