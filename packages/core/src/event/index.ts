import type createEmptyEvent from './functions/create-empty-event'
import type createEmptyGuest from './functions/create-empty-guest'
import type validateEventDataConsistency from './functions/validate-event-data-consistency'
import type validateGuestDataConsistency from './functions/validate-guest-data-consistency'
import Event from './model/event'
import Guest from './model/guest'

export type { Event, Guest }

export {
  createEmptyEvent,
  createEmptyGuest,
  validateEventDataConsistency,
  validateGuestDataConsistency
}
