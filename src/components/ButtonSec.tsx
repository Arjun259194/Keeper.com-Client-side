import { FC } from "react"

type props = {
  children: React.ReactNode
}

const ButtonSec: FC<props> = ({ children }) => {
  return (
    <button className="py-1.5 px-8 rounded-full border-2 text-base sm:text-xl md:text-2xl border-solid font-semibold border-black bg-prime text-center capitalize hover:brightness-105">
      {children}
    </button>
  )
}

export default ButtonSec
