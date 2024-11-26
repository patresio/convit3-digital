import { Guest, Id } from '../../'

export default function createEmptyGuest(): Partial<Guest> {
  return {
    id: Id.new(),
    name: '',
    email: '',
    confirmation: true,
    hasCompanions: false,
    quantityCompanions: 0
  }
}
