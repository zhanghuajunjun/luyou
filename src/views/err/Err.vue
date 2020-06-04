<template>
  <div class="container">
    <div>
      <img src="../../../404.jpg" alt />
      <span>
        <div>输入的内容有误请重新输入</div>
        <a class="item" @click='ClickItem'>返回首页</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    ClickItem(){
      this.$router.push('/')
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.item {
  padding: 3px 10px;
  background: yellow;
  color: #000;
  border-radius: 10px;
  text-decoration: none;
}
</style>