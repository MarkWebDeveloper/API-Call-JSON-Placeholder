import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import UserRepository from '@/repositories/UserRepository'
import UserService from '@/services/UserService'
import type User from '@/models/User'

export const useUsersStore = defineStore('users', () => {
  const repository = new UserRepository()
  const service = new UserService(repository)

  const users: User[] = reactive([])
  const isLoaded = ref(false)

  async function setUsers(this: any): Promise<void> {
    this.users = await service.index()
    isLoaded.value = true
  }

  return { users, isLoaded, setUsers }
})
