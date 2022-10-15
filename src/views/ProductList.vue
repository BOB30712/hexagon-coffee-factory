<template>
    <div class="container">
    <div class="row my-5">
        <div class="col-4">
            <button type="button" class="btn btn-outline-dark w-100 mb-5" style="letter-spacing: 3px;">新增商品</button>
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
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index,num) in allProduct" :key="item">
                    <th scope="row">{{num+1}}</th>
                    <td>{{item.category}}</td>
                    <td>{{item.title}}</td>
                    <td>{{item.price}}</td>
                    <td v-if="item.is_enabled">啟動</td>
                    <td v-else>未啟動</td>
                    <td class="text-center">編輯</td>
                </tr>
            </tbody>
            </table>
            <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link border" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link border" href="#">1</a></li>
                <li class="page-item"><a class="page-link border" href="#">2</a></li>
                <li class="page-item"><a class="page-link border" href="#">3</a></li>
                <li class="page-item"><a class="page-link border" href="#">Next</a></li>
            </ul>
            </nav>
        </div>
    </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            allProduct:[]
        }
    },
    methods:{
        getAllProduct(){
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/all`;
            this.$http.get(api)
                .then((res) => {
                    console.log(res)
                    this.allProduct=res.data.products
            });
        }
    },
    created(){
        this.getAllProduct()
    }
}
</script>