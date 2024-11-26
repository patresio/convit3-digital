import createEmptyEvent from './functions/create-empty-event'
import createEmptyGuest from './functions/create-empty-guest'
import validateEventDataConsistency from './functions/validate-event-data-consistency'
import validateGuestDataConsistency from './functions/validate-guest-data-consistency'
import Event from './model/event'
import Guest from './model/guest'

export type { Event, Guest }

export {
  createEmptyEvent,
  createEmptyGuest,
  validateEventDataConsistency,
  validateGuestDataConsistency
}
