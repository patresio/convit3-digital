import { Event } from '@/core'
// TODO: Add more validations and return an array of errors

const validateEvent = (event: Partial<Event>): string[] => {
  const errors: string[] = []
  if (!event.slug) {
    errors.push('Slug é obrigatorio')
  }
  if (!event.expectedAudience || event.expectedAudience <= 0) {
    errors.push('Quantidade de pessoas é obrigatorio')
  }
  if (!event.name) {
    errors.push('Nome é obrigatorio')
  }
  if (!event.date) {
    errors.push('Data é obrigatorio')
  }
  if (!event.location) {
    errors.push('Local é obrigatorio')
  }
  if (!event.description) {
    errors.push('Descrição é obrigatorio')
  }
  if (!event.image) {
    errors.push('Imagem é obrigatorio')
  }
  if (!event.bgImage) {
    errors.push('Imagem de fundo é obrigatorio')
  }

  return errors
}

export default validateEvent
