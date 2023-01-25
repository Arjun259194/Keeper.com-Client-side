import React, { useEffect, useState } from "react"
import { menu } from "../assets/icons"
import logo from "../assets/Keeper-logo.png"

type props = {
  children: React.ReactNode
}

const Header: React.FC<props> = ({ children }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    if (window.innerWidth > 640) setShowMenu(true)
    else setShowMenu(false)
  }, [window.innerWidth])

  return (
    <header className="relative py-6 flex items-center justify-between">
      <div className="flex items-center">
        <img className="aspect-square w-8 sm:w-16" src={logo} alt="logo" />
        <h1 className="text-black text-2xl sm:text-4xl xl:text-5xl font-title font-bold">Keeper</h1>
      </div>
      <nav>
        <button onClick={handleMenu} className="sm:hidden">
          {menu}
        </button>
        <ul
          style={{
            transform: showMenu ? "scale(1)" : "scale(0)",
          }}
          className="absolute sm:static top-2/3 right-0 rounded bg-white sm:bg-transparent p-2 sm:p-0 text-2xl 
          sm:text-xl flex flex-col sm:flex-row items-center capitalize [&>li]:mb-2 sm:[&>li]:ml-6
          transition-transform duration-150 ease-in-out origin-top-right z-10"
        >
          {children}
        </ul>
      </nav>
    </header>
  )
}

export default Header
