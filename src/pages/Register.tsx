import { FC } from "react"
import { Link } from "react-router-dom"
import bulbImage from "../assets/3D-bulb.png"
import docImage from "../assets/3D-docu.png"
import ButtonPrime from "../components/ButtonPrime"
import FormInput from "../components/FormInput"
import useInput from "../hooks/useInput"

const Register: FC = () => {
  const email = useInput(""),
    name = useInput(""),
    password = useInput(""),
    confPassword = useInput("")

  const submitHandler = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault()
    console.table({
      name,
      email,
      password,
      confPassword,
    })
  }

  //?write register login for this page and create login page next

  return (
    <div
      className="w-full h-screen overflow-hidden relative flex items-center justify-center bg-gradient-to-tl
     from-sec to-prime"
    >
      <div className="absolute flex z-0">
        <img className="hidden xl:w-2/4 xl:block xl:aspect-square xl:self-end xl:-rotate-45" src={bulbImage} alt="3D bulb icon" />
        <img className="hidden xl:w-2/4 xl:block xl:aspect-square xl:self-start xl:rotate-45" src={docImage} alt="3D document icon" />
      </div>
      <form
        className="w-11/12 sm:w-3/5 xl:w-auto py-8 px-5 xl:px-10 flex flex-col items-center
         rounded-[3rem] bg-white z-10"
        onSubmit={submitHandler}
      >
        <h3 className="xl:my-6 text-4xl xl:text-6xl font-bold ">Register</h3>
        <FormInput type="text" state={name}>
          Name
        </FormInput>
        <FormInput type="email" state={email}>
          Email
        </FormInput>
        <FormInput type="password" state={password}>
          Password
        </FormInput>
        <FormInput type="password" state={confPassword}>
          Confirm Password
        </FormInput>
        <p className="mt-5 sm:text-2xl">
          <span>Already have an account?</span>
          <Link to="/login">
            <span className="ml-1 text-sec underline underline-offset-2">Login</span>
          </Link>
        </p>
        <span className="mt-5">
          <ButtonPrime>Register</ButtonPrime>
        </span>
      </form>
    </div>
  )
}

export default Register
