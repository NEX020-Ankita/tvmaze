import React from 'react'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-2">
        <h1 className="text-3xl font-bold">Welcome to TVMaze</h1>
        <p className="text-sm opacity-90 mt-1">Discover shows, schedules, and more.</p>
      </div>
    </header>
  )
}
