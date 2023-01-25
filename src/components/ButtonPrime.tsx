import { FC } from "react"
import { ButtonElement } from "../module/interface"

const ButtonPrime: FC<ButtonElement> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-1.5 px-8 bg-sec text-base sm:text-xl md:text-2xl text-white font-semibold
       border-2 border-sec rounded-full text-center capitalize hover:brightness-105"
    >
      {children}
    </button>
  )
}

export default ButtonPrime
