export default class User {
  id: number = 0
  name: string
  city: string
  phone: string

  constructor(id: number, name: string, city: string, phone: string) {
    this.id = id
    this.name = name
    this.city = city
    this.phone = phone
  }

  getId() {
    return this.id
  }

  getName() {
    return this.name
  }

  getCity() {
    return this.city
  }

  getPhone() {
    return this.phone
  }
}
