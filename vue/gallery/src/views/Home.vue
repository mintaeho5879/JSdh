<script setup>
import { getItems } from '@/services/itemService';
import { onMounted } from 'vue';

onMounted(async() => {
  const res = await getItems();
    console.log(res.data);
})
</script>

<template>
  <div class="container">
    <h1 class="mt-5">HELLO, HOME</h1>
  </div>
</template>

<style scoped>

</style>