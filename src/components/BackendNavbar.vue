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
        <router-link class="nav-link fs-3" to="/DashBorder/Product">產品列表</router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link fs-3" to="/DashBorder/Order">訂單列表</router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link fs-3" to="/DashBorder/Coupon">優惠卷</router-link>
        </li>
        <li class="nav-item">
        <a @click.prevent="logout" href="#" class="link nav-link fs-3" to="/AboutUs">登出LogOut</a>
        </li>
    </ul>
    </div>
</div>
</nav>
</template>

<script>
export default{
    methods:{
        logout(){
            const api = `${process.env.VUE_APP_API}logout`;
            this.$http.post(api)
                .then((res) => {
                    console.log(res)
                    this.$router.push("/login")
            });
        }
    }
}
</script>

<style  lang="scss">
.nav-item:hover{
    color: black;
    background-color: white;
}
.nav-item>a:hover{
    color: black;
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