<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark  py-0" style="position:relative">
  <div class="container">
    <a class="navbar-brand text-white" href="#">六角咖啡工廠</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link class="nav-link fs-3" to="/">首頁</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link fs-3" to="/UserCart">購買商品</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link fs-3" to="/JoinCourse">課程報名</router-link>
        </li>
        <li class="nav-item">
          <router-link class="link nav-link fs-3" to="/AboutUs">關於我們</router-link>
        </li>
        <li class="nav-item">
          <a class="link nav-link fs-3" href="#" @click.prevent="openFavoritelist()"><i class="bi bi-heart"><div class="divright"><p class="rounded px-1">{{num}}</p></div></i></a>
        </li>
        <li class="nav-item">
          <router-link class="link nav-link fs-3" to="/UserCartList"><i class="bi bi-cart-fill"><div class="divright"><p class="rounded px-1">{{cartnum}}</p></div></i></router-link>
        </li>
      </ul>
    </div>
  </div>
  </nav>
  <FaModal ref="fModal"/>
</template>

<script>
    import $ from 'jquery'
    import FaModal from '@/components/FavoriteModal.vue'
    export default {
      data () {
        return {
          cartnum:0,
          num:0
        }
      },
      components:{
        FaModal
      },
      methods:{
        getproduct(){
          const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
          this.$http.get(url)
          .then((res) => {
            this.cartnum=res.data.data.carts.length
          })
        },
        updatenum(){
          this.num++
        },
        openFavoritelist(){
          const Component = this.$refs.fModal
          Component.show()
        }
      },
      created(){
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
            this.$http.get(url)
            .then((res) => {
                this.cartnum=res.data.data.carts.length
            })
        this.$emitter.on('clear', () => { this.num = 0})
        this.$emitter.on('productcart', this.getproduct)
        this.$emitter.on('senddata', this.updatenum)
        /*
        if(localStorage.getItem('count')){
        this.num=localStorage.getItem('count22');
        this.$emitter.on('senddata', (data) => { this.num = data })
        }
        */
        $(document).ready(function(){
        });
      }
    }
</script>

<style lang="scss">
.nav-item:hover{
    color: black;
    background-color: white;
}
.nav-item>a:hover{
    color: black;
}

.bi{
position: relative;
}
.divright{
position:absolute;
z-index: 99;
font-size: 5px;
left : 60%;
top : -20%;
text-align: center;
}
.divright p{
background-color: white;
font-weight: bold;
color: black;
border: 1px solid black;
}

nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active{
      background-color: white;
    }
  }
}
</style>