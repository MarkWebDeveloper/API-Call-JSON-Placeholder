export default class UserRepository {
  url: string = 'https://jsonplaceholder.typicode.com/users'

  async getAll(): Promise<Array<Record<string, unknown>>> {
    try {
      const response = await fetch(this.url)
      const data = await response.json()
      console.log(data)
      return data
    } catch (error) {
      throw new Error('Error occured during APIs users table data extraction')
    }
  }
}
