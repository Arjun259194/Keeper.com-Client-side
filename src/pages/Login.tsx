import { FC, FormEvent, useEffect } from "react"
import { Link } from "react-router-dom"
import bulbImage from "../assets/3D-bulb.png"
import docImage from "../assets/3D-docu.png"
import ButtonPrime from "../components/ButtonPrime"
import FormInput from "../components/FormInput"
import Loading from "../components/Loading"
import useFetch from "../hooks/useFetch"
import useInput from "../hooks/useInput"

const Login: FC = () => {
  const email = useInput(""),
    password = useInput("")

  const { data, loading, refresh, statusCode } = useFetch({
    method: "POST",
    start: false,
    route: "/auth/login",
    data: {
      email: email.value,
      password: password.value,
    },
  })

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()
    refresh()
  }

  useEffect(() => {
    console.table({ data, loading, statusCode })
    if (loading === true) return
    if (data === undefined) return

    switch (statusCode) {
      case 200:
        window.localStorage.setItem("token", data.token)
        console.log(data.message)
        window.location.href = "/user"
        break

      case 402:
      case 404:
        console.log(data)

      default:
        break
    }
  }, [data])

  return (
    <div className="w-full h-screen relative overflow-hidden flex justify-center bg-gradient-to-tl from-sec to-prime">
      <div className="absolute flex z-0">
        <img
          className="hidden xl:w-2/4 xl:block xl:aspect-square xl:self-end xl:-rotate-45"
          src={bulbImage}
          alt="3D bulb icon"
        />
        <img
          className="hidden xl:w-2/4 xl:block xl:aspect-square xl:self-start xl:rotate-45"
          src={docImage}
          alt="3D document icon"
        />
      </div>
      <form
        className="w-11/12 sm:w-3/5 xl:w-2/5 xl:max-w-md py-8 px-5 my-auto xl:px-10 flex flex-col items-center
        xl:items-start rounded-[3rem] bg-white shadow-2xl z-10"
        onSubmit={submitHandler}
      >
        <h3 className="xl:my-6 text-4xl xl:text-6xl font-bold ">Login</h3>
        {loading ? (
          <Loading />
        ) : (
          <>
            <FormInput state={email} type="email">
              Email
            </FormInput>
            <FormInput state={password} type="password">
              Password
            </FormInput>
            <p className="mt-5 sm:text-xl text-gray-500">
              Don't have an account?
              <Link to="/register">
                <span className="mx-1 text-sec font-bold underline underline-offset-2">
                  Register
                </span>
              </Link>
            </p>
            <span className="mt-5">
              <ButtonPrime>Login</ButtonPrime>
            </span>
          </>
        )}
      </form>
    </div>
  )
}

export default Login
