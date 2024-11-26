import { Id } from '../../shared'
import Guest from '../model/guest'

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
