<template>
    <div class="container">
        <typerwirter/>
        <div class="row position-relative" style="height: 600px;">
            <div class="Coruse-img position-absolute">
                <img style="width: 400px; height:500px;object-fit: cover;" src="https://i.pinimg.com/236x/3a/6b/34/3a6b34b70aa44e874060cdd58ce0023e.jpg" alt="課程圖片">
            </div>
            <div class="Coruse-info p-3">
                <h1 class="fw-bold" style="color:#d2b94b;">手沖咖啡，拉花體驗</h1>
                <p class="ps-5 fw-bold" style="color:#d2b94b;">義大利咖啡拉花體驗課程(含實際操作)</p>
                <p>想要親手體驗拉花美學嗎?</p>
                <p>教你如何用家用器材，就能做出拿鐵拉花。我們會示範幾款能在家輕鬆做出Espresso的家用器材，以及在家手打奶泡的方式。當然，人都來了，不會讓你錯過操作專業義式咖啡機做出拉花的機會。</p>
                <button type="button" class="mt-5 px-5 btn btn-outline-dark rounded-pill">報名參與</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@import '../../node_modules/bootstrap/scss/functions';
@import '../../node_modules/bootstrap/scss/variables';
@import '../../node_modules/bootstrap/scss/mixins';
.Coruse-img{
    display: none;
}
.Coruse-info{
    border-radius: 5%;
    border:5px solid black;
    background-color: white;
    width: 100%;
    height: 400px;
}
@include media-breakpoint-up(lg) {
    .Coruse-img{
    display: block;
    top: 0%;
    left: 10%;
    z-index: -1;
    }
    .Coruse-info{
    margin-top: 5%;
    margin-left: 40%;
    width: 500px;
    }
}
</style>
<script>
import typerwirter from '@/components/TypeWriter2.vue'
export default{
    components:{typerwirter}
}
</script>