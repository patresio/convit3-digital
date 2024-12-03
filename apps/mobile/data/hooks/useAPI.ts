import { useCallback } from 'react'

const urlBase = process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:4000'

export default function useAPI() {
  const httpGet = useCallback(async function (path: string) {
    const uri = path.startsWith('/') ? path : `/${path}`
    const urlComplete = `${urlBase}${uri}`

    const response = await fetch(urlComplete)
    return extractData(response)
  }, [])

  const httpPost = useCallback(async function (path: string, body: any) {
    const uri = path.startsWith('/') ? path : `/${path}`
    const urlComplete = `${urlBase}${uri}`

    const response = await fetch(urlComplete, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body ? JSON.stringify(body) : null
    })
    return extractData(response)
  }, [])

  function extractData(response: Response) {
    let context: any

    try {
      context = response.json()
    } catch (error) {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return null
    }
    if (!response.ok) throw context
    return context
  }

  return { httpGet, httpPost }
}
