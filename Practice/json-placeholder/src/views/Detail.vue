<script setup>
import { reactive, onMounted } from 'vue';
import Post from '@/components/Post.vue';

const state = reactive({
     post: {
        id :0,
        title: '',
        body: '',
        userId: 0
    }
});
onMounted(() => {
    const passJson = history.state.data;
    if(passJson) {
        //passJson 을 객체로 바꿔서 post에 넣어주세요
    state.post = JSON.parse(passJson);
    }
});
</script>

<template>
    <h1>Detail.vue</h1>
    <post :item="state.post"/>
    <!-- Post 컴포넌트를 이용하여 화면에 내용을 출력해주세요. -->
</template>

<style scoped>

</style>