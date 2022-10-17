<template>
    <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header bg-danger text-white fw-bold">
            <h5 class="modal-title">資料刪除</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <p>確定要刪除<span v-if="itemInfo.title" class="text-danger fw-bold fs-4">"{{itemInfo.title}}"</span>這筆資料嗎</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary me-auto" data-bs-dismiss="modal">取消返回</button>
            <button type="button" class="btn btn-primary" @click="$emit('del-product',itemInfo)">確定刪除</button>
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
            itemInfo:{}
        }
    },
    props:{
        item:{
        type: Object,
        default() {return {}}
      }
    },
    watch:{
        item(){
            this.itemInfo=this.item
        }
    },
    methods:{
        show(){
            this.modal.show()
        },
        hide(){
          this.modal.hide()
        }
    },
    mounted(){
        this.modal = new Modal(this.$refs.modal)
    }
}
</script>