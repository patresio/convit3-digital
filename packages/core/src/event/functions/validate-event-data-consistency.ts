import { Id, Password } from '../../shared'
import Event from '../model/event'
import validateEvent from './validate-event'

export default function validateEventDataConsistency(
  partialEvent: Partial<Event>
): Event {
  const errors = validateEvent(partialEvent)
  if (errors.length) {
    throw new Error(errors.join('\n'))
  }

  const event: Event = {
    ...partialEvent,
    id: partialEvent.id ?? Id.new(),
    password: partialEvent.password ?? Password.create(20),
    expectedAudience: Number(partialEvent.expectedAudience ?? 1)
  } as Event

  return event
}
