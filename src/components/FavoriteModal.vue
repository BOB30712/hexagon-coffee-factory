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
            <p v-for="item in FavoriteArray" :key="item">{{item}}</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">全部移除</button>
            <button type="button" class="btn btn-primary">全部加入購物車</button>
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
        }
    },
    mounted(){
        this.modal = new Modal(document.getElementById('myModal'))
        this.$emitter.on('senddata', (data) => { this.FavoriteArray.push(data) })
    }
}

</script>