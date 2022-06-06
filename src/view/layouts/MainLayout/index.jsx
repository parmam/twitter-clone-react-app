import React from 'react'

export function MainLayout({ children }) {
  return (
    <>
      <main className="bg-slate-600 w-full h-screen">
        {children}
      </main>
    </>
  )
} 