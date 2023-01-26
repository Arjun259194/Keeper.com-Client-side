import { useEffect, useState } from "react"

interface BaseProps {
  url: string
  start: boolean
}

type GetProps = {
  method: "GET" | "HEAD"
  data?: never
}

type PostProps = {
  method: "POST" | "PUT" | "DELETE"
  data: object
}

type ConditionalProp = GetProps | PostProps

type Props = BaseProps & ConditionalProp

type FetchReturn = {
  data: object | undefined
  loading: boolean
  refresh: () => void
  statusCode: number
}

const useFetch = ({ url, method, data, start }: Props): FetchReturn => {
  const [result, setResult] = useState<object>(),
    [loading, setLoading] = useState<boolean>(false),
    [statusCode, setStatusCode] = useState<number>(-1)

  const fetchData = async () => {
    console.log(data)
    if (loading) return
    setLoading(true)
    try {
      const response = await fetch(url, {
        method,
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

  return { loading, refresh, statusCode, data }
}

export default useFetch
