<script setup>
import { getItems, removeItem , clearAll } from '@/services/cartService';
import { reactive, onMounted , computed  } from 'vue';

// 반응형 상태
const state = reactive({
    items: []
});

const calc = computed(() => {
    let sum = 0 ;
    state.items.forEach( item => {
        sum += item.price - item.price * item.discountPer / 100;
    });
    return sum;
})

// 장바구니 상품 조회
const load = async () => {
    const res = await getItems();
    if(res === undefined || res.status !== 200) {
        return;
    }
    state.items = res.data;
}

//장바구니 상품 삭제
const remove = async cartId => {
     const res = await removeItem(cartId);
    console.log(res);
    if(res === undefined || res.status !== 200) {
        return;
    }
    alert("선택하신 장바구니의 상품을 삭제했습니다.");
    await load();
    //다시 리로딩 or 방금 삭제한 객체만 state.items에서 삭제한다
}
onMounted(()=> {
    load();
});

const clear = async() => {
    const res = await clearAll();
    if(res === undefined || res.status !== 200) {
        return;
    }
    alert("장바구니가 모두 삭제되었습니다.");
    state.items = [];
}

</script>

<template>
<div class="cart">
    <div class="container">
        <template v-if="state.items.length">
            <ul class="items">
                <li v-for="item in state.items">
                    <img :src="`pic/item/${item.imgPath}`" :alt="`상품 사진(${item.name})`"/>
                    <b class="name">{{ item.name }}</b>
                    <span class="price">
                        {{ (item.price - item.price*item.discountPer / 100).toLocaleString() }}원
                    </span>
                    <span class="remove float-end" @click="remove(item.id)" title="삭제">&times;</span>
                </li>
            </ul>
            <div class="sum"> 합계: {{ calc.toLocaleString() }}</div>
            <div class="act d-flex justify-content-between">
                <button @click="clear" class="btn btn-warning">장바구니 비우기</button>
                <router-link to="/order" class="btn btn-primary">주문하기</router-link>
            </div>
        </template>
        <div class="text-center py-5" v-else>장바구니가 비어있습니다.</div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.cart {
    .items {
        list-style:none;
        margin: 0;
        padding: 0;
        li{
            border:1px solid #eee;
            margin-top: 25px;
            margin-bottom: 25px;
        }
        img {
        
            width: 150px;
            height: 150px;
        }
        .name {
            margin-left: 25px;
        }
        .price {
            margin-left: 25px;
        }
        .remove {
            cursor: pointer;
            font-size: 30px;
            padding: 5px 15px;
        }
    }
    .act .btn {
        width: 300px;
        display:block;
        margin: 0 auto;
        padding: 30px 50px;
        font-size: 20px;
    }
}
</style>