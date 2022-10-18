<template>
    <ul class="progress-cart  list-unstyled d-flex justify-content-center mt-5">
        <li class="active ok">購物車清單</li>
        <li class="active ok">輸入資料</li>
        <li id="final" class="active" :class="{ok:UserOrder.is_paid}">確認付款</li>
    </ul>
    <div class="my-5 row justify-content-center">
        <form class="col-md-6">
        <table class="table align-middle">
            <thead>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
            </thead>
            <tbody>
            <tr v-for="item in UserOrder.products" :key="item">
            <td>{{item.product.title}}</td>
            <td>{{item.qty}}</td>
            <td class="text-end">{{item.product.price}}</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
            <td colspan="2" class="text-end">總計 {{UserOrder.total}} 元</td>
            <td class="text-end"></td>
            </tr>
            </tfoot>
        </table>

        <table class="table">
            <tbody>
            <tr>
            <th width="100">Email</th>
            <td>{{UserInfo.email}}</td>
            </tr>
            <tr>
            <th>姓名</th>
            <td>{{UserInfo.name}}</td>
            </tr>
            <tr>
            <th>收件人電話</th>
            <td>{{UserInfo.tel}}</td>
            </tr>
            <tr>
            <th>收件人地址</th>
            <td>{{UserInfo.address}}</td>
            </tr>
            <tr>
            <th>付款狀態</th>
            <td>
                <span class="text-danger" v-if="!UserOrder.is_paid">尚未付款</span>
                <span class="text-success" v-else>付款完成</span>
            </td>
            </tr>
            </tbody>
        </table>
        <div class="text-end">
            <button v-if="!UserOrder.is_paid" @click.prevent="PayOrder" class="btn btn-danger">確認付款去</button>
            <button v-else disabled class="btn btn-success">付款已完成</button>
        </div>
        </form>
    </div>
</template>

<script>
import $ from 'jquery'
export default{
    data(){
        return{
            Userid:'',
            UserOrder:{},
            UserInfo:{}
        }
    },
    methods:{
        getOrder(){
            const api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.Userid}`
            this.$http.get(api)
            .then((res)=>{
                this.UserOrder=res.data.order
                this.UserInfo=res.data.order.user
            })
        },
        PayOrder(){
          const api=`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.Userid}`
            this.$http.post(api)
            .then(()=>{
              this.getOrder()
              $('#final').addClass('ok')
            })
        }
    },
    created(){
        this.Userid=this.$route.params.UserCartid
        this.getOrder()
    }
}
</script>

<style>
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
