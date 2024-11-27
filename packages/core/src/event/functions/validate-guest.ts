import Guest from '../model/guest'
// TODO: Add more validations and return an array of errors

export default function validateEvent(guest: Partial<Guest>): string[] {
  const errors: string[] = []

  if (!guest.name) {
    errors.push('Nome é obrigatorio')
  }
  if (!guest.email) {
    errors.push('Email é obrigatorio')
  }

  return errors
}
