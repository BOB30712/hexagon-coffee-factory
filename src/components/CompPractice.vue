<template>
    <p>這是子元件: {{msg}}</p>
    <button @click="emit()">傳送至富源建</button>
</template>

<script>
export default {
    props: {
    msg: String,
    },
    emits:{
        test:(data)=>{
            if(data!=0){
                return false;
            }
            return true;
        }
    },
    methods: {
        emit () {
            this.$emit('test','這是從子元件傳送過來的')
        }
    }
}
</script>