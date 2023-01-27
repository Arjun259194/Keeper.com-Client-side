import useFetch from "../hooks/useFetch"

const User = () => {
  if (window.localStorage.getItem("token") === null) {
    window.location.href = "/login"
    return <></>
  }

  const { data, loading, refresh, statusCode } = useFetch({
    method: "GET",
    route: "/user",
    start: false,
  })

  return (
    <div>
      <h1>You are logged in</h1>
      <span>Great</span>
    </div>
  )
}

export default User
