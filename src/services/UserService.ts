import User from '@/models/User'
import UserRepository from '@/repositories/UserRepository'

export default class UserService {
  repository = new UserRepository()
  users: User[] = []

  constructor(repository: any) {
    this.repository = repository
  }

  async index(): Promise<User[]> {
    const users = await this.repository.getAll()

    users.forEach((user: any) => {
      const userToAdd = new User(user.id, user.name, user.address.city, user.phone)
      this.users.push(userToAdd)
    })

    return this.users
  }
}
