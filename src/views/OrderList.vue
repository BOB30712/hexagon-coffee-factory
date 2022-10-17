<template>
<div class="container">
<table class="table mt-4">
<thead>
<tr>
    <th>購買時間</th>
    <th>Email</th>
    <th>購買款項</th>
    <th>應付金額</th>
    <th>是否付款</th>
    <th>編輯</th>
</tr>
</thead>
<tbody>
    <template v-for="item in orders" :key="item">
    <tr>
        <td>{{$filter.date(item.create_at)}}</td>
        <td><span>{{item.user.email}}</span></td>
        <td>
        <ul class="list-unstyled">
            <li v-for="i in item.products" :key="i">
            <span class="text-primary fw-bold">{{i.product.title}}</span> 累計 {{i.qty}} 每份 {{i.product.price}}元
            </li>
        </ul>
        </td>
        <td class="text-right">{{item.total}}</td>
        <td>
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" :checked="item.is_paid">
            <label class="form-check-label">
            <span v-if="item.is_paid">已付款</span>
            <span v-else>未付款</span>
            </label>
        </div>
        </td>
        <td>
        <div class="btn-group">
            <button @click.prevent="openmodal(item)" class="btn btn-outline-primary btn-sm">檢視</button>
            <button @click.prevent="opendelmodal(item)" class="btn btn-outline-danger btn-sm">刪除</button>
        </div>
        </td>
    </tr>
    </template>
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
<ordermodal ref='modal' :order='temporder'/>
<delmodal ref='delmodal' :item='temporder' @del-product='delorder'/>
</template>

<script>
import ordermodal from '@/components/OrderModal.vue'
import delmodal from '@/components/DelCheckModal.vue'
export default{
    data(){
        return{
            orders:[],
            temporder:{},
            CurrentPage:1,
            pagination:{},
        }
    },
    components:{
        ordermodal,
        delmodal
    },
    methods:{
        getOrders(){
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${this.CurrentPage}`;
            this.$http.get(api)
                .then((res) => {
                    this.orders=res.data.orders
                    this.pagination=res.data.pagination
                    //console.log(res)
            });
        },
        openmodal(item){
            this.temporder=item
            const Component=this.$refs.modal
            Component.show()
        },
        opendelmodal(item){
            this.temporder=item
            const Component=this.$refs.delmodal
            Component.show()
        },
        delorder(item){
            this.temporder=item
            const Component=this.$refs.delmodal
            Component.show()
            let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
            this.$http.delete(api)
                .then(() => {
                    this.getOrders()
                    Component.hide()
            });
        },
        changePage(num){
            this.CurrentPage=num
            this.getOrders()
        }
    },
    created(){
        this.getOrders()
    }
}
</script>