import { Event } from '../../event'
import { Id } from '../../shared'

export default function createEmptyEvent(): Partial<Event> {
  return {
    id: Id.new(),
    name: '',
    description: '',
    date: new Date(),
    expectedAudience: 1,
    location: '',
    image: '',
    bgImage: ''
  }
}
