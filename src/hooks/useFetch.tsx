import { useEffect, useState } from "react"
import { FetchReturn, Props } from "../module/interface"

const getUrl = (route: string): string =>
  new URL(route, import.meta.env.VITE_API_URL).href

const useFetch = ({ route, method, data, start }: Props): FetchReturn => {
  const [result, setResult] = useState<object>(),
    [loading, setLoading] = useState<boolean>(false),
    [statusCode, setStatusCode] = useState<number>(-1)

  const fetchData = async () => {
    if (loading) return
    setLoading(true)

    const url = getUrl(route)

    try {
      const response = await fetch(url, {
        method: method,
        headers:
          data === undefined
            ? {}
            : {
                "Content-Type": "application/json",
              },
        body: JSON.stringify(data === undefined ? {} : data),
      })

      setStatusCode(response.status)
      const json = await response.json()
      setResult(json)
    } catch (err) {
      console.log("%c" + err, "color:red;font-size:3rem;")
      setResult({})
    }
    setLoading(false)
  }

  useEffect(() => {
    if (start) fetchData()
  }, [start, fetchData])

  const refresh = (): void => {
    fetchData()
  }

  return { loading, refresh, statusCode, data: result }
}

export default useFetch
