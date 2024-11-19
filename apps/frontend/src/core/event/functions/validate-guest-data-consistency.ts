import { Guest, Id } from '@/core'
import validateGuest from './validate-guest'

const validateGuestDataConsistency = (partialGuest: Partial<Guest>): Guest => {
  const errors = validateGuest(partialGuest)

  if (errors.length) {
    throw new Error(errors.join('\n'))
  }

  const quantityCompanions = partialGuest.quantityCompanions ?? 0
  const hasCompanions =
    partialGuest.hasCompanions &&
    partialGuest.confirmation &&
    quantityCompanions > 0

  const updatedGuest = {
    ...partialGuest,
    id: partialGuest.id ?? Id.new(),
    quantityCompanions: hasCompanions ? quantityCompanions : 0,
    hasCompanions: hasCompanions
  } as Guest

  return updatedGuest
}

export default validateGuestDataConsistency
