<script setup>
import { reactive, onMounted } from 'vue';
import httpService from '@/services/HttpService';
import Post from '@/components/Post.vue';

const state = reactive({
    postList: []
})
onMounted(() => {
    findAll();
});


const findAll = async () => {
    const data = await httpService.postFindAll();
    console.log('data:', data);
    state.postList = data;


}
</script>

<template>
    <h1>List.vue</h1>
    <post v-for="item in state.postList" :key="item.id" :item="item"></post>
</template>

<style scoped>

</style>