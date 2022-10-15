<template>
    <div class="toast-container position-fixed pe-3" style="bottom: 0;left: 0;">
        <Toast v-for="(msg, key) in message" :key="key" :msg='msg'/>
    </div>
</template>
<script>
import Toast from '@/components/ToastInfo.vue'

export default {
    data(){
        return {
            message:[]
        }
    },
    components:{
        Toast
    },
    mounted(){
        this.$emitter.on('opentoast',(data) => { this.message.push(data) })
    }
}
</script>