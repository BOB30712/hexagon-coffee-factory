<template>
  <router-view/>
  <FooterComp/>
</template>
<script>
import $ from 'jquery'
import FooterComp from '@/components/FooterComp.vue';
export default {
  data () {
        return {
          num:0
        }
    },
  components:{
    FooterComp
  },
  created(){
    this.$emitter.on('senddata', (data) => { this.num = data })
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
*{
  outline: 0px solid black;
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active{
      color: black;
    }
  }
}
</style>