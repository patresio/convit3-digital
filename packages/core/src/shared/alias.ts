export default class Alias {
  static format(value: string) {
    return value.replace(/ /g, '-').toLowerCase()
  }
}
