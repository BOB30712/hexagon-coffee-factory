<template>
    <div class="modal" tabindex="-1" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">最愛名單</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <p>目前有{{FavoriteArray.length}}個物品在最愛清單</p>
            <p v-for="item in FavoriteArray" :key="item">{{item.title}}</p>
        </div>
        <div class="modal-footer">
            <button @click.prevent="clearFavoriteList" type="button" class="btn btn-secondary">全部移除</button>
            <button @click.prevent="allFavoriteArrayaddCart" type="button" class="btn btn-primary">全部加入購物車</button>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default{
    data(){
        return{
            modal:{},
            FavoriteArray:[]
        }
    },
    methods:{
        show(){
            this.modal.show()
        },
        hide(){
            this.modal.hide()
        },
        clearFavoriteList(){
            this.FavoriteArray=[]
            this.$emitter.emit('clear','清除最愛名單')
            this.hide()
        },
        allFavoriteArrayaddCart(){
            this.FavoriteArray.forEach((item)=>{
                this.addCart(item.id,item.title)
            })
            this.$emitter.emit('clear','清除最愛名單')
            this.FavoriteArray=[]
            this.hide()
        },
        addCart(id,name){
            const cart={
                product_id: id,
                qty: 1
            };
            this.status=id;
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
            this.$http.post(api,{data:cart})
            .then(() => {
                this.$emitter.emit('productcart',id)
                this.$emitter.emit('opentoast',{style:'success',text:name+'加入購物車成功'})
            });
        },
    },
    mounted(){
        this.modal = new Modal(document.getElementById('myModal'))
        this.$emitter.on('senddata', (data) => { this.FavoriteArray.push(data) })
    }
}

</script>