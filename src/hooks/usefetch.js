import { useState, useEffect } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async (fetchOptions) => {
      setIsPending(true)      
      try {
        const res = await fetch(url)
        if(!res.ok) {
          throw new Error(res.statusText)
        }
        const data = await res.json();

        setIsPending(false)
        setData(data.main)
        setError(null)
      } catch (err) {
        if (err.name === "AbortError") {
          console.log(err.message)
        } else {
          setIsPending(false)
          setError(err.message)
        }
      }
    }

    fetchData()   

    return () => {
      controller.abort()
    }

  }, [url])

  return { data, isPending, error }
}