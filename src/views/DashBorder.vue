<template>
    <backendnavbar/>
    <router-view></router-view>
</template>
<script>
import backendnavbar from '@/components/BackendNavbar.vue'
export default{
    components:{
        backendnavbar
    },
    created() {
        //取出cookie裡面存入的token
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)MyVueToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
        //利用axios將token加入header
        this.$http.defaults.headers.common['Authorization'] = token;
        //測試是否處於登入狀態，不是則返回登入畫面
        const api = `${process.env.VUE_APP_API}api/user/check`;
        this.$http.post(api)
            .then((res) => {
            if (!res.data.success) {
                console.log("失敗");
                this.$router.push("/login");
            }
        });
    }
}
</script>