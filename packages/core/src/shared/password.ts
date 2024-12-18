export default class Password {
  static create(size: number = 15): string {
    const chars =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const charsSpecial = '!@#$%&*'
    const groups = [chars, charsSpecial]
    const password = []
    for (let i = 0; i < size; i++) {
      const group = groups[Math.floor(Math.random() * groups.length)]
      password.push(group[Math.floor(Math.random() * group.length)])
    }
    return password.join('')
  }
}
