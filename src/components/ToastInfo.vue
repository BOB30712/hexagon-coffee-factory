<template>
<div class="toast align-items-center text-white border-0" role="alert" aria-live="assertive" aria-atomic="true" ref="toast" :class="`bg-${msg.style}`">
  <div class="d-flex">
    <div class="toast-body">
        {{msg.text}}
    </div>
    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
</template>
<script>
import Toast from 'bootstrap/js/dist/toast'

export default {
    data(){
        return {
            toast:{}
        }
    },
    props:[
        'msg'
    ],
    methods:{
        open(){
            this.toast.show()
        }
    },
    mounted(){
        const toastE1 = this.$refs.toast
        this.toast = new Toast(toastE1, {
            delay: 2000
        })
        this.toast.show()
    }
}
</script>