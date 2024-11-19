import { Event, Id } from '@/core'

export default function createEmptyEvent(): Partial<Event> {
  return {
    id: Id.new(),
    alias: '',
    password: '',
    name: '',
    date: new Date(),
    location: '',
    description: '',
    image: '',
    bgImage: '',
    expectedAudience: 0,
    guests: []
  }
}
