<template>
 <div class="container">
   <div class="top">我是头部组件</div>
   <div>
     <router-view></router-view>
   </div>
   <div class="right">我是右边组件</div>
   
 </div>
</template>

<script>
 export default {
   name: '',
   props: {

   },
   data () {
     return {

     }
   },
   components: {

   },
   methods: {

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
  width: 100%;
  height: 100%;
  position: relative;
}
.top {
  width: 100%;
  height: 50px;
  background: black;
  color: #fff;
}
.right {
  width: 20px;
  height: 300px;
  background: springgreen;
  color: red;
  position: absolutea;
  top: 50px;
  left: 0;
}
</style>