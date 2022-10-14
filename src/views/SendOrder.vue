<template>
    <ul class="progress-cart  list-unstyled d-flex justify-content-center mt-5">
        <li class="active ok">購物車清單</li>
        <li class="active">輸入資料</li>
        <li>step3</li>
    </ul>
    <div class="my-5 row justify-content-center">
      <FoRm class="col-md-6 py-3 border border-dark border-3" v-slot="{ errors }" style="border-radius: 5%;">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <FieLd id="email" name="email" type="email" class="form-control"
                   :class="{ 'is-invalid': errors['email'] }"
                   placeholder="請輸入 Email" rules="email|required" v-model="form.user.email"></FieLd>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <FieLd id="name" name="姓名" type="text" class="form-control"
                   :class="{ 'is-invalid': errors['姓名'] }" 
                   placeholder="請輸入姓名" rules="required" v-model="form.user.name"></FieLd>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <FieLd id="tel" name="電話" type="tel" class="form-control"
                   :class="{ 'is-invalid': errors['電話'] }"
                   placeholder="請輸入電話" rules="required" v-model="form.user.tel"></FieLd>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <FieLd id="address" name="地址" type="text" class="form-control"
                   :class="{ 'is-invalid': errors['地址'] }" 
                   placeholder="請輸入地址" rules="required" v-model="form.user.address"></FieLd>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea name="" id="message" class="form-control" cols="30" rows="5" v-model="message"></textarea>
        </div>
        <div class="text-end">
          <button class="btn btn-danger" @click.prevent="SendOrderInfo">送出訂單</button>
        </div>
      </FoRm>
    </div>
</template>

<script>
export default{
  data(){
    return{
      form:{
        user:{
          name:'',
          email:'',
          tel:'',
          address:''
        }
      },
      message:''
    }
  },
  methods:{
    SendOrderInfo(){
      const api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      this.$http.post(api,{data:this.form,message:this.message})
      .then((res)=>{
        console.log(res)
        this.$emitter.emit('productcart','觸發子元件重新整理')
      })
    }
  }
}
</script>

<style>
*{
    outline: 0px solid black;
}
.progress-cart {
}
.progress-cart  li {
  list-style-type: none;
  float:left;
  width: 33.33%;
  position:relative;
  text-align:center;
}
.progress-cart  li:before {
  font-family: "Font Awesome\ 5 Free";
  font-weight: 900;
  content:"\f0f4";
  width: 30px;
  height: 30px;
  line-height:25px;
  border:3px solid #ddd;
  display:block;
  text-align:center;
  margin:0 auto 10px auto;
  border-radius:50%;
  background-color: #fff;
}
.progress-cart  .ok:before {
  font-family: "Font Awesome\ 5 Free";
  font-weight: 900;
  content:"\f00c";
  width: 30px;
  height: 30px;
  line-height:25px;
  border:3px solid #ddd;
  display:block;
  text-align:center;
  margin:0 auto 10px auto;
  border-radius:50%;
  background-color: #fff;
}
.progress-cart  li:after {
  content:"";
  position:absolute;
  width: 100%;
  height:3px;
  background-color: #ddd;
  top: 15px;
  left: -50%;
  z-index:-1;
}
.progress-cart  li:first-child:after {
  content:none;
}
.progress-cart  li.active {
  color:#955d42;
}
.progress-cart  li.active:before {
  border-color:black;
}
.progress-cart  li.active + li:after {
  background-color: black;
}
</style>