import { ChangeEvent, FC, ReactNode } from "react"

type FormInputType = "text" | "email" | "password"

interface props {
  children: ReactNode
  state: {
    value: any
    changeHandler: (event: ChangeEvent<HTMLInputElement>) => void
  }
  type: FormInputType
}

const FormInput: FC<props> = ({ children, state, type }) => {
  return (
    <div className="w-full flex flex-col">
      <label className="text-xl font-semibold sm:text-2xl" htmlFor="name">
        {children}
      </label>
      <input
        className="w-full mb-5 px-4 py-2 border-b-[3px] focus:border-b-[6px] rounded-lg outline-none
         text-xl border-sec focus:border-prime  bg-smokewhite accent-sec transition-all duration-200 ease-linear"
        type={type}
        value={state.value}
        onChange={state.changeHandler}
      />
    </div>
  )
}

export default FormInput
