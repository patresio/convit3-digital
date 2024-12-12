import { Id } from '../../shared'
import Event from '../model/event'

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
