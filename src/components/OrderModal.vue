<template>
<div class="modal fade" id="productModal" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
<div class="modal-dialog modal-xl" role="document">
    <div class="modal-content border-0">
    <div class="modal-header bg-dark text-white">
        <h5 class="modal-title" id="exampleModalLabel">
        <span>訂單細節</span>
        </h5>
        <button type="button" class="btn-close"
                data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="row">
        <div class="col-md-4">
            <h3>用戶資料</h3>
            <table class="table">
            <tbody v-if="temporder.user">
                <tr>
                <th style="width: 100px;">姓名</th>
                <td>{{temporder.user.name}}</td>
                </tr>
                <tr>
                <th>Email</th>
                <td>{{temporder.user.email}}</td>
                </tr>
                <tr>
                <th>電話</th>
                <td>{{temporder.user.tel}}</td>
                </tr>
                <tr>
                <th>地址</th>
                <td>{{temporder.user.address}}</td>
                </tr>
            </tbody>
            </table>
        </div>
        <div class="col-md-8">
            <h3>訂單細節</h3>
            <table class="table">
            <tbody>
                <tr>
                <th style="width: 100px">訂單編號</th>
                <td>{{temporder.id}}</td>
                </tr>
                <tr>
                <th>下單時間</th>
                <td>{{$filter.date(temporder.create_at)}}</td>
                </tr>
                <tr>
                <th>付款時間</th>
                <td>
                    <span v-if="temporder.paid_date">{{$filter.date(temporder.paid_date)}}</span>
                    <span v-if="!temporder.paid_date">時間不正確</span>
                </td>
                </tr>
                <tr>
                <th>付款狀態</th>
                <td>
                    <strong class="text-success" v-if="temporder.is_paid">已付款</strong>
                    <span  class="text-muted" v-else>尚未付款</span>
                </td>
                </tr>
                <tr>
                <th>總金額</th>
                <td>{{temporder.total}}</td>
                </tr>
            </tbody>
            </table>
            <h3>選購商品</h3>
            <table class="table">
            <thead>
                <tr>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in temporder.products" :key="item">
                <th>
                    {{item.product.title}}
                </th>
                <td>
                {{item.qty}}/{{item.product.unit}}
                </td>
                <td class="text-end">
                {{item.final_total}}
                </td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary"
                data-bs-dismiss="modal" @click="hide">取消
        </button>
        <button type="button" class="btn btn-primary">確認</button>
    </div>
    </div>
</div>
</div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  data () {
    return {
      modal: {},
      temporder: {}
    }
  },
  props: {
    order: {
      type: Object,
      default () { return {} }
    }
  },
  watch: {
    order () {
      this.temporder = this.order
    }
  },
  methods: {
    hide () {
      this.modal.hide()
      console.log(this.order)
    },
    show () {
      this.modal.show()
      // console.log(this.order)
    }
  },
  mounted () {
    const ordermodal = document.querySelector('#productModal')
    this.modal = new Modal(ordermodal)
  }
}
</script>