<template>
    <LoadIng :active="isLoading"></LoadIng>
    <div class="row mt-5 justify-content-center g-5">
        <div class="col-lg-5 col-8">
            <img class="w-100" style="height: 300px;object-fit: cover;" :src="product.imageUrl" alt="商品圖片">
        </div>
        <div class="col-lg-4 col-8 card border-0" style="height: 300px;">
            <h1 style="color:brown;">{{product.title}}</h1>
            <p>分類:<span class="border rounded-pill border-3 border-dark px-2 ms-3">{{product.category}}</span></p>
            <h2 class="text-lg-end">價格:{{product.price}}</h2>
            <textarea class="mb-4" name="" id="" cols="20" rows="10" v-model="product.description"></textarea>
            <div class="d-flex justify-content-between mt-lg-auto">
                <div class="input-group" style="width: 150px;">
                    <button type="button" class="btn btn-outline-dark" :disabled="productqty==1" @click.prevent="updateqty(productqty-1)">
                        <i class="bi bi-dash"></i>
                    </button>
                    <input
                        v-model="productqty"
                        type="text"
                        min="1"
                        class="form-control form-control-sm text-center border-dark bg-transparent"
                    />
                    <button type="button" class="btn btn-outline-dark" @click.prevent="updateqty(productqty+1)">
                        <i class="bi bi-plus"></i>
                    </button>
                </div>
                <button type="button" class="btn btn-outline-dark text-nowrap" @click.prevent="AddtoCart(id,productqty)">加入購物車</button>
            </div>
        </div>
    </div>
    <div class="row my-5 d-flex justify-content-center">
        <h3 class="other-product text-center">你可能也會喜歡</h3>
        <randomProduct @change-product="getProduct"/>
    </div>
</template>
<style>
.other-product{
    letter-spacing: 3px;
    color:brown ;
    position: relative;
    width: 250px;
}
.other-product::after{
    position: absolute;
    content: '';
    top:40%;
    left: -30%;
    width: 90px;
    height: 5px;
    background-color: brown;
}
.other-product::before{
    position: absolute;
    content: '';
    top:40%;
    right: -30%;
    width: 90px;
    height: 5px;
    background-color: brown;
}
</style>
<script>
import randomProduct from '@/components/ProductRandom.vue'
export default{
    data () {
        return {
            id:'',
            productqty:1,
            product:{},
            isLoading:true,
        }
    },
    components:{
        randomProduct
    },
    methods:{
        updateqty(qty){
            this.productqty=qty
        },
        productinfo(){
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
            this.$http.get(api)
            .then((res) => {
                this.product = res.data.product
                this.isLoading=false
            })
        },
        AddtoCart(id,qty){
        const data={
            "product_id":id,
            "qty":Number(qty)
        }
        console.log(data)
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
        this.$http.post(api,{'data':data})
        .then(() => {
            this.$emitter.emit('productcart','觸發子元件重新整理')
            this.productqty=1
        })
        },
        getProduct (item) {
            this.isLoading=true
            this.id=item.id
            this.productinfo()
        }
    },
    created () {
        this.id=this.$route.params.productid
        this.productinfo()
    }
}
</script>