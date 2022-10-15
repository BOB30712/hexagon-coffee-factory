<template>
    <div class="container">
        <div>這是Apage</div>
        <p>這是一些文字:{{ttt}}</p>
        <div class="row">
        <div class="col-6">
            <router-view name="left"></router-view>
        </div>
        <div class="col-6">
            <router-view name="right"></router-view>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            ttt:''
        }
    },
    created () {
        this.$emitter.on('tt', (data) => { this.ttt = data })
    }
}
</script>