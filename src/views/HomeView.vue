<script setup lang="ts">
import { useUsersStore } from '@/stores/usersStore';

const usersStore = useUsersStore()

</script>

<template>
  <main>
    <h1 v-if="usersStore.isLoaded">{{ usersStore.users[0].name }}</h1>
  </main>
</template>

<style lang="scss" scoped>

</style>