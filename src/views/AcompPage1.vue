<template>
    這是A-1page
    <p>這是一段文字:{{text}}</p>
    <CompPractice msg='從父元件過來的文字' v-on:test='exampleEmit'/>
</template>

<script>
import CompPractice from '@/components/CompPractice.vue';
export default {
    data (){
        return {
            text:''
        }
    },
    components:{
        CompPractice
    },
    methods:{
        exampleEmit(data){
            this.text=data
        }
    }
}
</script>