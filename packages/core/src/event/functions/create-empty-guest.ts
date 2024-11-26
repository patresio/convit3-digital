import { Guest, Id } from '../../'

const createEmptyGuest = (): Partial<Guest> => {
  return {
    id: Id.new(),
    name: '',
    email: '',
    confirmation: true,
    hasCompanions: false,
    quantityCompanions: 0
  }
}

export default createEmptyGuest
