<script setup lang="ts">
import type User from '@/models/User';
defineProps<{
    user: User
}>()
</script>

<template>
 <tr>
    <td>{{user?.id}}</td>
    <td>{{user?.name}}</td>
    <td>{{user?.city}}</td>
 </tr>
</template>

<style lang="scss" scoped>
td {
    border: 1px solid black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-style: normal;
}
</style>