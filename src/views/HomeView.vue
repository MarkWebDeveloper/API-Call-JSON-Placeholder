<script setup lang="ts">
import UserRow from '@/components/table/UserRow.vue';
import type User from '@/models/User';
import { useUsersStore } from '@/stores/usersStore';
import { ref } from 'vue';

const usersStore = useUsersStore()

const searchedUserId = ref()

const foundUserId = ref()
const foundUserName = ref()
const foundUserPhone = ref()

const searchUser = (): void => {
  const searchedUser: User | undefined = usersStore.users.find((user: User) => user.id == searchedUserId.value);
  if (searchedUser == undefined) {
    alert("There is no user with this ID in database")
  }
  foundUserId.value = searchedUser?.id;
  foundUserName.value = searchedUser?.name;
  foundUserPhone.value = searchedUser?.phone;
};

</script>

<template>
  <main>
    <div id="main-container">
      <h1>Users Database</h1>

      <div id="table-section-container">
        <div id="search-container">
          <div id="input-container">
            <input type="text" v-model="searchedUserId">
            <button @click="searchUser()">Search</button>
          </div>
          <table v-if="usersStore.isLoaded && foundUserId!=undefined">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
            </tr>
            <tr>
              <td>{{ foundUserId }}</td>
              <td>{{ foundUserName }}</td>
              <td>{{ foundUserPhone }}</td>
            </tr>
          </table>
        </div>
        <table v-if="usersStore.isLoaded">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
          </tr>
          <UserRow v-for="user in usersStore.users" :key="user.id" :user="user" />
        </table>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding: 2%;
}

#main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2%;
}

#table-section-container {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

th {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

#search-container {
  display: flex;
  flex-direction: column;
}

#input-container {
  width: 100%;
  display: flex;
  align-items: center;
  height: 10%;
}

input {
  height: 1.5rem;
}

button {
  border: 2px solid black;
  margin-left: 10%;
  padding: 1%;
}

td {
    border: 1px solid black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-style: normal;
}
</style>