<script setup lang="ts">
import UserRow from '@/components/table/UserRow.vue';
import { useUsersStore } from '@/stores/usersStore';

const usersStore = useUsersStore()

</script>

<template>
  <main>
    <h1>Users Database</h1>
    <div>
      <table v-if="usersStore.isLoaded">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>City</th>
      </tr>
      <UserRow v-for="user in usersStore.users" :key="user.id" :user="user"/>
    </table>
    </div>
  </main>
</template>

<style lang="scss" scoped>

  main {
    padding: 2%;
  }

  h1 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 2%;
  }

  div {
    display: flex;
    justify-content: center;
  }

  th {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
</style>