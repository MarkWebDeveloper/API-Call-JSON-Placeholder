import User from "@/models/User";
import UserRepository from "@/repositories/UserRepository";

export default class UserService {

    repository = new UserRepository
    users: { id: number; name: string, city: string, phone: string}[] = []

    constructor(repository: any) {
        this.repository = repository
    }

    async index(): Promise<{ id: number; name: string; city: string; phone: string; }[]> {
        const users = await this.repository.getAll()
        
        users.forEach((user: any) => {
            const userToAdd = new User(user.id, user.name, user.address.city, user.address.geo.phone)
            this.users.push(userToAdd)
        });

        return this.users
    }

}