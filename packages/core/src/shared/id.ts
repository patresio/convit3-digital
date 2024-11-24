import { v4 as uuid, validate } from 'uuid'

export default class Id {
  static new(): string {
    return uuid()
  }

  static validation(id: string): boolean {
    return validate(id)
  }
}
