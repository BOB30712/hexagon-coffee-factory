<template>
<swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :slidesPerGroup="3"
    :loop="true"
    :loopFillGroupWithBlank="true"
    :pagination="{
    clickable: true,
    }"
      :breakpoints="{
      '200': {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper mb-5"
>
    <template v-for="item in product" :key="item">
      <swiper-slide2>
        <div class="card bg-dark text-white w-100 detail-link">
        <img :src="item.imageUrl" class="card-img" alt="商品" style="height: 300px;object-fit: cover;">
        <div class="card-img-overlay top-auto bg-dark-gradient">
          <div class="mb-5 d-flex justify-content-center detail">
            <a @click="getProduct(item.id)" class="detail"><p class="text-white text-center fw-bold test2 p-3" style="letter-spacing: 5px;">了解更多</p></a>
          </div>
          <h3 class="card-title text-start  ps-4 author fw-bold">{{item.title}}</h3>
        </div>
      </div>
      </swiper-slide2>
    </template>
</swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

export default {
  data () {
    return {
      product:[]
    }
  },
  components: {
      Swiper,
      SwiperSlide2:SwiperSlide,
  },
  methods:{
    getallproduct(){
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(api)
        .then((res) => {
          this.product=res.data.products
          //console.log('product',this.product);
        });
    },
    getProduct (id) {
      this.$router.push(`/UserProduct/${id}`)
    }
  },
  setup() {
      return {
      modules: [ Navigation],
      };
  },
  created () {
    this.getallproduct();
  }
};
</script>
<style>
#app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 200px;
}

.swiper-slide{
  font-size: 50px;
  background: transparent;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
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
 .swiper-button-next,
  .swiper-button-prev {
    color: white;
    font-weight: bold;
    top: 45%;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #303840;
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 12px;
    font-weight: bold;
  }
</style>
  