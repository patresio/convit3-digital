import Guest from '../model/guest'
import validateGuest from './validate-guest'

export default function validateGuestDataConsistency(
  partialGuest: Partial<Guest>
): Guest {
  const errors = validateGuest(partialGuest)

  if (errors.length > 0) {
    throw new Error(errors.join('\n'))
  }

  const quantityCompanions = partialGuest.quantityCompanions ?? 0
  const hasCompanions =
    partialGuest.hasCompanions &&
    partialGuest.confirmation &&
    quantityCompanions > 0

  const updatedGuest = {
    ...partialGuest,
    quantityCompanions: hasCompanions ? quantityCompanions : 0,
    hasCompanions: hasCompanions
  } as Guest

  return updatedGuest
}
