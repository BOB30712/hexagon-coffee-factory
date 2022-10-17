<template>
<div class="container">
    <div class="text-end mt-4">
        <button class="btn btn-dark" type="button" @click="openmodal(flase)">
        增加優惠卷
    </button>
    </div>
    <table class="table mt-4">
    <thead>
    <tr>
        <th>名稱</th>
        <th>優惠碼</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item,key) in AllCoupon" :key="key">
        <td>{{item.title}}</td>
        <td>{{item.code}}</td>
        <td>{{item.percent}}%</td>
        <td>{{$filter.date(item.due_date)}}</td>
        <td>
        <span v-if="item.is_enabled==1">啟用</span>
        <span v-else>未起用</span>
        </td>
        <td>
        <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm"
                    @click="openmodal(true, item)"
            >編輯</button>
            <button class="btn btn-outline-danger btn-sm"
                    @click="opendelmodal(item)"
            >刪除</button>
        </div>
        </td>
    </tr>
    </tbody>
    </table>
    <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
        <li :class="{disabled:!pagination.has_pre}" class="page-item"><a @click.prevent="changePage(CurrentPage-1)" class="page-link border" href="#">Previous</a></li>
        <template v-for="(item,index) in pagination.total_pages" :key="item">
          <li :class="{active:index+1==pagination.current_page}" class="page-item"><a @click.prevent="changePage(index+1)" class="page-link border" href="#">{{index+1}}</a></li> 
        </template>
        <li :class="{disabled:!pagination.has_next}" class="page-item"><a @click.prevent="changePage(CurrentPage+1)" class="page-link border" href="#">Next</a></li>
    </ul>
    </nav>
</div>
<addcoupons ref="addcoupon" :coupon="SelectCoupon" @add-coupons="addcoupons"></addcoupons>
<delcoupons ref="delcoupon" :item="SelectCoupon" @del-product="DelCoupon"></delcoupons>
</template>

<script>
import addcoupons from '../components/CouponsModal.vue'
import delcoupons from '../components/DelCheckModal.vue'
export default {
  data () {
    return {
      text: '',
      CurrentPage:1,
      pagination:{},
      Coupon: {},
      AllCoupon: [],
      SelectCoupon: {},
      isNew: false
    }
  },
  components: {
    addcoupons,
    delcoupons
  },
  methods: {
    openmodal (isNew, item) {
      if (isNew) {
        this.SelectCoupon = { ...item }
      } else {
        this.SelectCoupon = {
          due_date: new Date().getTime() / 1000
        }
      }
      this.isNew = isNew
      const m = this.$refs.addcoupon
      m.show()
    },
    getAllOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${this.CurrentPage}`
      this.$http.get(api)
        .then((res) => {
          console.log(res)
          this.AllCoupon = res.data.coupons
          this.pagination=res.data.pagination
        })
    },
    addOrder () {
      alert('新增成功')
    },
    addcoupons (item) {
      let httpMethod = 'post'
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      if (this.isNew) {
        httpMethod = 'put'
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
      }
      this.Coupon = item
      this.Coupon.due_date = Math.floor(new Date(this.Coupon.due_date) / 1000)
      const controllmodal = this.$refs.addcoupon
      this.$http[httpMethod](api, { data: this.Coupon })
        .then(() => {
          // console.log(res)
          // console.log(this.Coupon)
          this.getAllOrder()
          controllmodal.hide()
        })
    },
    opendelmodal (item) {
      this.SelectCoupon = item
      const m = this.$refs.delcoupon
      m.show()
    },
    DelCoupon () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.SelectCoupon.id}`
      const m = this.$refs.delcoupon
      this.$http.delete(api)
        .then((res) => {
          console.log(res)
          this.getAllOrder()
        })
      m.hide()
    },
    changePage(num){
      this.CurrentPage=num
      this.getAllOrder()
    }
  },
  created () {
    this.getAllOrder()
  }
}
</script>