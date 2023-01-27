import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import User from "./pages/User"

function App() {
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/health-check")
      .then(res => res.json())
      .then(data => console.table(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="font-body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  )
}

export default App
