import { useCallback } from 'react'

const urlBase = process.env.EXPO_PUBLIC_API_URL

export default function useAPI() {
  const httpGet = useCallback(async function (path: string) {
    const uri = path.startsWith('/') ? path : `/${path}`
    const urlComplete = `${urlBase}${uri}`

    const response = await fetch(urlComplete)
    return extractData(response)
  }, [])

  const httpPost = useCallback(async function (path: string, body?: any) {
    const uri = path.startsWith('/') ? path : `/${path}`
    const urlComplete = `${urlBase}${uri}`
    const resposta = await fetch(urlComplete, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    return extractData(resposta)
  }, [])

  async function extractData(resp: Response) {
    let context: any

    try {
      context = await resp.json()
    } catch (error) {
      if (!resp.ok) {
        throw new Error(`HTTP error! status: ${resp.status}`)
      }
      return null
    }
    if (!resp.ok) throw context
    return context
  }

  return { httpGet, httpPost }
}
