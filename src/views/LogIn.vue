<template>
    <div class="container my-5">
        <h1 class="text-center">管理員登入</h1>
        <form class="row justify-content-center" @submit.prevent="singin">
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input v-model="FormData.username" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input v-model="FormData.password" type="password" class="form-control" id="exampleInputPassword1">
                </div>
                <button type="submit" class="btn btn-primary w-100 py-3 fs-3 fw-bold">登入</button>
            </div>
        </form>
    </div>
</template>

<script>
export default{
    data(){
        return {
            FormData:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        singin(){
        const api = `${process.env.VUE_APP_API}admin/signin`
        this.$http.post(api, this.FormData)
            .then((res) => {
                if (res.data.success) {
                    console.log(res.data)
                    //取出token, expired參數
                    const { token, expired } = res.data
                    //將token與日期存入cookie
                    document.cookie = `MyVueToken=${token}; MyVueExpired=${new Date(expired)}`
                    this.$router.push('/DashBorder/Product')
                }
            })
        }
        
    }
}
</script>