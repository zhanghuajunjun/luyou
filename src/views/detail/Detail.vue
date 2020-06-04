<template>
 <div>
   <h3>我是详情页</h3>
   <h5>我是从home传过来的id：{{id}}</h5>
   <br>
   <input type="text" v-model="value">
 </div>
</template>

<script>
 export default {
   name: 'Detail',
   props: {

   },
   data () {
     return {
       id: null
     }
   },
   components: {

   },
   methods: {
     
   },
   mounted() {
    this.id=this.$route.query.id
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>