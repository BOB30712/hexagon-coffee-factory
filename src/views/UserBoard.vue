<template>
    <FrontNavbar/>
    <router-view></router-view>
    <toastmessages/>
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue'
import toastmessages from '@/components/ToastMessages.vue'
export default {
    components:{
        FrontNavbar,
        toastmessages,
    },
    provide: {
        message: 'hello!'
    }
}
</script>