<template>
    <div class="container d-flex justify-content-center align-items-center flex-column flex-lg-row">
    <template v-for="item in product" :key="item">
        <div class="card bg-dark text-white detail-link col-lg-2 m-3 col-8">
            <img :src="item.imageUrl" class="card-img" alt="商品" style="height: 300px;object-fit: cover;">
            <div class="card-img-overlay top-auto bg-dark-gradient">
                <div class="mb-5 d-flex justify-content-center detail">
                <a @click="$emit('change-product',item)" class="detail"><p class="text-white text-center fw-bold test2 p-3" style="letter-spacing: 5px;">了解更多</p></a>
                </div>
                <h3 class="card-title text-start  ps-4 author fw-bold">{{item.title}}</h3>
            </div>
        </div>
    </template>
    </div>
</template>

<script>
export default{
    data(){
        return{
            product:[]
        }
    },
    methods:{
        getRandomProduct(){
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
            this.$http.get(api)
            .then((res) => {
                for(let i=0;i<4;i++){
                    let RandomNum=Math.floor(Math.random()*res.data.products.length)
                    this.product.push(res.data.products[RandomNum])
                    res.data.products.splice(RandomNum, 1)
                }
            });
        },
    },
    mounted(){
        this.getRandomProduct()
    }
}
</script>

<style>
.bg-dark-gradient {
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
}
.detail{
  display: none;
}
.detail-link{
  overflow: hidden;
}
.detail-link img{
  transition: all 0.8s;
}
.detail-link:hover .detail{
  display: block;
}
.test2{
  width: 100%;
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
.detail-link:hover img{
  transform: scale(1.2);
  transition: all 0.8s;
}

</style>