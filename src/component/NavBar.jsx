import React from 'react'

export default function NavBar() {
  return (
    <nav className="w-full bg-green-800 dark:bg-white-300 backdrop-blur border-b border-green-900 dark:border-gray-700 text-white">
      <div className="container mx-auto px-4 py-3 flex items-center gap-4">
        <a href="#" className="flex justify-start items-center gap-4 text-sm ">
          TVMaze
        </a>
        <div className="flex justify-start items-center gap-4 text-sm">
          <a href="#" className="hover:underline">
            Web Channals
          </a>
          <a href="#" className="hover:underline">
            Articles
          </a>
          <a href="#" className="hover:underline">
            Schedule
          </a>
          <a href="#" className="hover:underline">
            Calender
          </a>
          <a href="#" className="hover:underline">
            Countdown
          </a>
          <a href="#" className="hover:underline">
            Forums
          </a>
        </div>
      </div>
    </nav>
  );
}
