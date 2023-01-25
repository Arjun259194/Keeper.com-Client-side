import { FC } from "react"
import { ButtonElement } from "../module/interface"

const ButtonSec: FC<ButtonElement> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-1.5 px-8 rounded-full border-2 text-base sm:text-xl md:text-2xl border-solid
       font-semibold border-black bg-prime text-center capitalize hover:brightness-105"
    >
      {children}
    </button>
  )
}

export default ButtonSec
