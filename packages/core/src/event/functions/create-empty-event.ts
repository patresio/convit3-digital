import { Event, Id } from '../../'

export default function createEmptyEvent(): Partial<Event> {
  return {
    id: Id.new(),
    slug: '',
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
