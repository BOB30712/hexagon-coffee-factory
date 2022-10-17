<template>
    <div class="container">
    <div class="row my-5">
        <div class="col-4">
            <button @click.prevent="openProductModal(true)" type="button" class="btn btn-outline-dark w-100 mb-5" style="letter-spacing: 3px;">新增商品</button>
            <ul class="list-group">
            <li class="list-group-item active" aria-current="true">An active item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
            </ul>
        </div>
        <div class="col-8">
            <table class="table table-striped border">
            <thead>
                <tr>
                <th scope="col" width="10">#</th>
                <th scope="col" >分類</th>
                <th scope="col" >商品名稱</th>
                <th scope="col" width="100">價格</th>
                <th scope="col" width="80">是否啟用</th>
                <th scope="col" width="150" class="text-center">編輯</th>
                <th scope="col" width="150" class="text-center">刪除</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in allProduct" :key="item">
                    <th scope="row">{{index+1}}</th>
                    <td>{{item.category}}</td>
                    <td>{{item.title}}</td>
                    <td>{{item.price}}</td>
                    <td class="text-success" v-if="item.is_enabled">啟動</td>
                    <td class="text-danger" v-else>未啟動</td>
                    <td class="text-center"><button @click.prevent="openProductModal(false,item)" type="button" class="btn btn-outline-success">編輯</button></td>
                    <td class="text-center"><button @click.prevent="openDelProductModal(item)" type="button" class="btn btn-outline-danger">刪除</button></td>
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
    </div>
    </div>
    <productmodal ref='productmodal' :product="tempProduct" @update-product="updateProduct"/>
    <delproductmodal ref='delproduct' :item="tempProduct" @del-product="delProduct"/>
</template>

<script>
import productmodal from '@/components/ProductModal.vue'
import delproductmodal from '@/components/DelCheckModal.vue'
export default{
    data(){
        return{
            allProduct:[],
            tempProduct:{},
            isNew:false,
            CurrentPage:1,
            pagination:{}
        }
    },
    components:{
        productmodal,
        delproductmodal
    },
    methods:{
        getAllProduct(){
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${this.CurrentPage}`;
            this.$http.get(api)
                .then((res) => {
                    console.log(res)
                    this.allProduct=res.data.products
                    this.pagination=res.data.pagination
            });
        },
        openProductModal(isNew,item){
            if(isNew){
                this.tempProduct={}
            }else{
                this.tempProduct={...item}
            }
            this.isNew = isNew
            const Component = this.$refs.productmodal
            Component.show()
        },
        openDelProductModal(item){
            this.tempProduct=item;
            const Component = this.$refs.delproduct
            Component.show()
        },
        delProduct(item){
            this.tempProduct=item;
            const Component = this.$refs.delproduct
            let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
            this.$http.delete(api)
                .then((res) => {
                    console.log(res)
                    this.getAllProduct()
                    Component.hide()
            });
        },
        updateProduct(item){
            this.tempProduct = item
            const productComponent = this.$refs.productmodal
            // 新增
            let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
            let httpMethod = 'post'
            // 編輯
            if (!this.isNew) {
                httpMethod = 'put'
                api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
            }
            this.$http[httpMethod](api,{data:this.tempProduct})
                .then((res) => {
                    console.log(res)
                    this.getAllProduct()
                    productComponent.hide()
            });
        },
        changePage(num){
            this.CurrentPage=num
            this.getAllProduct()
        }
    },
    created(){
        this.getAllProduct()
    }
}
</script>