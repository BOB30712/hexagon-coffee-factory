<template>
    <div class="container">
    <LoadIng :active="isLoading"></LoadIng>
    <div class="form-floating mt-5">
        <input type="text" class="form-control border border-2 border-dark rounded-pill" id="floatingInput" placeholder="123" v-model="search" style="padding-left: 20px;">
        <label for="floatingInput" class="ms-2">search</label>
    </div>
    <div class="row mt-5">
    <div class="col-lg-4 col-12">
        <ul class="list-unstyled row row-cols-lg-1 row-cols-3">
            <li class="px-0"><a class="active d-block selector fs-3 fw-bold mb-2 text-nowrap" href="#" @click.prevent="selector('all')"><i class="bi bi-cup-fill icon"></i>All</a></li>
            <li class="px-0"><a class="d-block selector fs-3 fw-bold mb-2 text-nowrap" href="#" @click.prevent="selector('卡布奇諾')"><i class="bi bi-cup-fill icon"></i>卡布奇諾</a></li>
            <li class="px-0"><a class="d-block selector fs-3 fw-bold mb-2 text-nowrap" href="#" @click.prevent="selector('濃縮咖啡')"><i class="bi bi-cup-fill icon"></i>濃縮咖啡</a></li>
            <li class="px-0"><a class="d-block selector fs-3 fw-bold mb-2 text-nowrap" href="#" @click.prevent="selector('拿鐵')"><i class="bi bi-cup-fill icon"></i>拿鐵</a></li>
        </ul>
    </div>
    <div class="col-lg-8 col-12">
        <ul class="list-unstyled row row-cols-1 row-cols-lg-3 gy-3">
            <template v-for="item in productinonepage" :key="item">
                <li class="col">
                    <div class="card w-100 position-relative test1-link">
                        <div class="position-absolute top-0 end-0 m-3 test1">
                            <button :disabled="favoritelist.includes(item)" @click.prevent="addFavorite(item)" style="border: 0px solid black;background-color:transparent;"><i class="bi bi-heart-fill fs-3 py-0 text-danger" v-if="favoritelist.includes(item)"></i><i class="bi bi-heart-fill fs-3 py-0 text-white" v-else></i></button>
                        </div>
                        <img :src="item.imageUrl" class="card-img-top" alt="商品圖片" style="height:200px;object-fit: cover;">
                        <div class="card-body">
                            <h3>{{item.title}}</h3>
                            <div class="d-flex">
                                <button class="fs-4 addtocart" @click.prevent="addCart(item.id,item.title)" v-if="this.status!=item.id"><i class="bi bi-cart-fill px-2"></i></button>
                                <button class="fs-4 ms-2 addtocart" @click.prevent="addCart(item.id,item.title)" disabled v-else><i class="bi bi-box-seam-fill"></i></button>
                                <p class="card-text ms-auto fs-4">售價$: {{item.price}}</p>
                            </div>
                        </div>
                        <div class="card-img-overlay test1 h-25" style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));margin-top: 100px;">
                            <a @click="getProduct(item.id)"><p class="card-text text-white text-center fw-bold test2 p-3" style="letter-spacing: 5px;">了解更多</p></a>
                        </div>
                    </div>
                </li>
            </template>
        </ul>
        <PageComp :alldata='this.products' v-on:pagetest='Page'/>
    </div>
    </div>
    </div>

</template>

<style>
    .addtocart:hover{
        transition: all 0.7s;
        transform:scale(1.2);
    }
    .active.selector{
        color: black;
        z-index: 20px;
    }
    .selector::after{
        z-index: -10px;
        position: absolute;
        content: " ";
        top: 0px;
        left: 0;
        width: 0%;
        height: 100%;
        /*background: linear-gradient(-45deg, transparent 10%, #955d42 0);*/
        border-bottom: 10px solid black;
    }
    .selector:hover::after{
        width: 100%;
        transition: all 0.8s;
    }
    .active>.icon{
        display: inline;
    }
    .icon{
        display: none;
    }
    .selector{
        color: gray;
        position: relative;
    }
    .selector:hover{
       color: black; 
    }
    .test2{
        position: relative;
        border: 2px solid #fff;
    }
    .test2::after{
        top: 10px;
        left: 10px;
        content: " ";
        width: 100%;
        height: 100%;
        position: absolute;
        border: 2px solid #fff;	
    }
     .test2:hover::after{
        top: 0;
        left: 0;
        border: 2px solid #fff;
        transition: all 0.8s;
    }
    .test1{
        display: none;
    }
    div> .img{
        width: 100%;
        height: 100%;
        object-fit:cover;
        object-position: 50%  20%;
        transition: all 0.8s;
    }
    .img:hover{
        opacity: 0.5;
        transition: all 0.8s;
        transform: scale(1.5);
    }
    .test1-link:hover .test1{
        display: block;
    }
</style>

<script>
import $ from 'jquery'
import PageComp from '@/components/PageComp.vue'
export default {
    data () {
        return {
            search:'',
            products:[],
            page:0,
            status:'',
            favoritelist:[],
            isLoading:true
        }
    },
    inject:['message'],
    components:{
        PageComp
    },
    computed:{
        filterProduct(){
            return this.products.filter(item=>{
                return item.title.match(this.search)
            })
        },
        productinonepage(){
            return this.filterProduct.slice(this.page,this.page+3)
        }
    },
    methods: {
        addCart(id,name){
            const cart={
                product_id: id,
                qty: 1
            };
            this.status=id;
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
            this.$http.post(api,{data:cart})
            .then(() => {
                //console.log(res)
                this.$emitter.emit('productcart',id)
                this.$emitter.emit('opentoast',{style:'success',text:name+'加入購物車成功'})
            });
        },
        getProduct (id) {
        this.$router.push(`/UserProduct/${id}`)
        },
        addFavorite(item){
            //localStorage.setItem('count', this.num);
            this.$emitter.emit('senddata',item);
            this.favoritelist.push(item)
        },
        clearFavorite(){
            this.favoritelist=[]
        },
        selector (category) {
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
            this.$http.get(api)
            .then((res) => {
                if(category!='all'){
                    this.products=res.data.products.filter(function(item){
                    return item.category==category;
                    });  
                }else{
                    this.products=res.data.products
                }
            });
        },
        Page(num){
            this.page=num*3
        }
    },
    created () {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
        this.$http.get(api)
        .then((res) => {
          this.products=res.data.products;
          //this.list=this.products;
          this.isLoading=false
          //console.log(this.products);
        });
        this.$emitter.on('clear', this.clearFavorite)
        $(document).ready(function(){
            $('.selector').click(function(){
                $(this).addClass('active').parent().siblings().find('.selector').removeClass('active');
            })
        })
    }
}
</script>