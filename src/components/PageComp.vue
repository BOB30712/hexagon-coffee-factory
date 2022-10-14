<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            <li class="page-item">
            <a class="page-link border border-dark" href="#" :class="{disabled:currentpage==0}" @click.prevent="updatepage(currentpage-1)">Previous</a>
            </li>
            <template v-for="(item,index) in pagecount" :key="item">
                <li class="page-item" :class="{active:index==currentpage}"><a class="page-link border border-dark" href="#" @click.prevent="changepage(index)">{{index+1}}</a></li>
            </template>
            <li class="page-item ">
            <a class="page-link border border-dark" href="#" :class="{disabled:currentpage+1==pagecount}" @click.prevent="updatepage(currentpage+1)">Next</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default{
    data(){
        return{
            currentpage:0
        }
    },
    props:{
        alldata:Array
    },
    computed:{
        pagecount(){
            return Math.round(this.alldata.length/3)
        }
    },
    methods:{
        changepage(num){
            this.$emit('pagetest',num)
            this.currentpage=num
        },
        updatepage(num){
            this.changepage(num)
            this.currentpage=num
        }
    },
    mounted(){
    }
}
</script>

//取得所有資料
//根據資料產出對應頁數，每頁資料數
//有起始頁面並能切換頁面

//父元件傳入陣列

//頁面參數:單頁面數量、產品類型、目前頁面