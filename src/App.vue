<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useUsersStore } from './stores/usersStore'
import { onBeforeMount } from 'vue'

const usersStore = useUsersStore()

onBeforeMount(async () => {
  await usersStore.setUsers()
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
