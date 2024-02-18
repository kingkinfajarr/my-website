// 'use client' is not necessary; Next.js automatically handles client-side rendering

import React from 'react'
import { Toggle } from '..'
import { Sun, Moon } from 'react-feather'
import { useTheme } from 'next-themes'

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div>
      <Toggle>
        <button onClick={toggleTheme}>
          {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </Toggle>
    </div>
  )
}
