import { Guest } from '../../'
// TODO: Add more validations and return an array of errors

export default function validateEvent(guest: Partial<Guest>): string[] {
  const errors: string[] = []

  if (!guest.name) {
    errors.push('Nome é obrigatorio')
  }
  if (!guest.email) {
    errors.push('Email é obrigatorio')
  }

  if (guest.confirmation && guest.hasCompanions) {
    if (!guest.quantityCompanions || guest.quantityCompanions <= 0) {
      errors.push('Quantidade de pessoas é obrigatorio')
    }
  }

  return errors
}
