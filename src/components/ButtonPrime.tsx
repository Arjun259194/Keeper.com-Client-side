import { FC } from "react"

type props = {
  children: React.ReactNode
}

const ButtonPrime: FC<props> = ({ children }) => {
  return (
    <button className="py-1.5 px-8 bg-sec text-base sm:text-xl md:text-2xl text-white font-semibold border-2 border-sec rounded-full text-center capitalize hover:brightness-105">
      {children}
    </button>
  )
}

export default ButtonPrime
