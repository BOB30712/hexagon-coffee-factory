<template>
    這是A-2page
    <p>這是一串文字:{{t}}</p>
    <input type="text" v-model="t">
    <button @click="update">更新</button>
</template>

<script>
export default {
    data () {
        return {
            t:'123456'
        }
    },
    methods:{
        update(){
            this.$emitter.emit('tt', this.t);
        }
    },
    created () {
        this.$emitter.emit('tt', this.t);
    }
}
</script>