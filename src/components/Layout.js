import React from 'react'
import '../styles/global.css'
import Sidebar from './Sidebar'

export default function Layout({ children }) {
  return (
    <div classname="layout">
        <Sidebar />
        <main id="main">
            { children }
        </main>
    </div>
  )
}
