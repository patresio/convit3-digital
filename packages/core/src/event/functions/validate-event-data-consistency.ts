import { Event, Id, Password } from '../../'
import validateEvent from './validate-event'

const validateEventDataConsistency = (partialEvent: Partial<Event>): Event => {
  const errors = validateEvent(partialEvent)
  if (errors.length) {
    throw new Error(errors.join('\n'))
  }

  const event: Event = {
    ...partialEvent,
    id: partialEvent.id ?? Id.new(),
    slug: partialEvent.slug ?? '',
    password: partialEvent.password ?? Password.create(20),
    name: partialEvent.name ?? '',
    date: partialEvent.date ?? new Date(),
    location: partialEvent.location ?? '',
    description: partialEvent.description ?? '',
    image: partialEvent.image ?? '',
    bgImage: partialEvent.bgImage ?? '',
    expectedAudience: Number(partialEvent.expectedAudience ?? 1),
    guests: []
  } as Event

  return event
}

export default validateEventDataConsistency
