<script setup>
import { computed } from 'vue';
import { addItem } from '@/services/cartService';
import { useAccountStore } from '@/stores/account';

const props = defineProps({
    item: {
        id: Number,
        imgPath: String,
        name: String,
        price: Number,
        discountPer: Number
    }
});

const account = useAccountStore();

const computedItemDiscountPrice = computed(()=>{
    return (props.item.price - (props.item.price * props.item.discountPer / 100)).toLocaleString() + '원';
})

const put = async () => {
    if(!account.state.loggedIn) {
        alert('로그인 후 사용해주세요.');
        return;
    }
    const res = await addItem( props.item.id );
    if(res === undefined || res.status !== 200) {return};
    console.log('카트담기 성공!');
    
};
</script>

<template>
<div class="card shadow-sm">
    <!-- 상품사진 -->
    <span class="img" :style="{backgroundImage: `url(/pic/item/${props.item.imgPath})`}" :aria-label="`상품 사진(${props.item.name})`"></span>
    <div class="card-body">
        <p class="card-text">
            <!-- 상품이름 -->
             <span class="me-2">{{ props.item.name }}</span>
            <!-- 상품 할인율 -->
             <span class="discount badge bg-danger">{{ props.item.discountPer }}%</span>
        </p>
        <div class="d-flex justify-content-between align-items-center">
            <button class="btn btn-primary btn-sm" @click="put()">장바구니 담기</button>
            <!-- 상품 정가(숫자데이터에 3자리마다 쉼표 표기) -->
            <small class="price text-muted">{{ props.item.price.toLocaleString() }}원</small>
            <small class="real text-danger">{{ computedItemDiscountPrice }}</small>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.card {
    overflow: hidden;
    .img {
        display: inline-block;
        width: 100%;
        height: 250px;
        background-size: cover;
        background-position: center;
    }
    .card-body .price {
        text-decoration: line-through;
    }
}
</style>