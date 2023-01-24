import { FC } from "react"
import { Link } from "react-router-dom"
import bulbImage from "../assets/3D-bulb.png"
import ButtonPrime from "../components/ButtonPrime"
import ButtonSec from "../components/ButtonSec"
import Header from "../components/Header"

const Home: FC = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-gradient-to-tl from-prime to-sec">
      <div className="w-5/6 mx-auto">
        <Header>
          <li className="font-bold underline underline-offset-2 decoration-sec">
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/login">
              <ButtonPrime>Log in</ButtonPrime>
            </Link>
          </li>
        </Header>

        <main className="">
          <div className="relative flex flex-col items-center xl:items-start">
            <h1 className="mt-16 sm:mt-20 xl:mt-28 text-6xl sm:text-5xl text-center font-bold">
              Welcome to Keeper.com
            </h1>
            <p className="mt-12 sm:mt-14 xl:mt-16 text-center xl:text-left xl:w-6/12 xl:leading-10 text-2xl sm:text-2xl font-semibold">
              <q>
                Keeper, the task master of your dreams, where productivity and organization unite.
                Achieve your goals and unlock your potential with our intuitive and feature-rich
                platform.
              </q>
            </p>
            <div className="mt-12 sm:mt-14 flex justify-between [&>*]:mx-2">
              <Link to="/register">
                <ButtonSec>Register</ButtonSec>
              </Link>
            </div>
            <img
              className="hidden xl:block xl:absolute xl:-top-5 xl:right-0 xl:rotate-[25deg] "
              src={bulbImage}
              alt="3D bulb image"
            />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
