import type Guest from './guest'

export default interface Event {
  id: string
  alias: string
  password: string
  name: string
  date: Date
  location: string
  description: string
  image: string
  bgImage: string
  expectedAudience: number
  guests: Guest[]
}

