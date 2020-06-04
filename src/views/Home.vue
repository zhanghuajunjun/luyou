<template>
 <div class="container">
   <one></one>
   <input type="text" v-model="value">
   <button @click="goTo">跳到About</button>

 </div>
</template>

<script>
 import One from '../components/One'
 export default {
   name: 'Home',
   props: {

   },
   data () {
     return {
       id: 100
     }
   },
   components: {
     One,
   },
   methods: {
     goTo(){
      //  this.$router.push('/detail')
       this.$router.push({path:'/detail',query:{id:this.id}})
     }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.container {
  text-align: center;
}
</style>
