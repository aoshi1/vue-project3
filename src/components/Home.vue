<template>
    <div id="Home">
      <h1>我是首页：</h1>
      <ul>
        <!--路径要写完整路径：父路径+子路径-->
        <!--span指在行内定义一个区域-->
        <span><router-link to="/home/one">子页面1</router-link></span>
        <span><router-link to="/home/two">子页面2</router-link></span>
        <span><router-link :to="{name: 'One', params:{username:'奥好的好的'}}">子页面1</router-link></span>
        <span><router-link to="/home/two/666/奥好的好的" >子页面2</router-link></span>
        <button @click="toThreePage">页面3</button>
      </ul>
      <!-- 子页面展示部分 -->
      <router-view/>
    </div>
</template>

<script>
    export default {
        name: "HomeVue",
        methods: {
          toThreePage() {
            this.$router.push({name: 'three', params: {id: 1, name: '奥好的好的'}})
          }
        }
    }
</script>
<style >
.router-link-active{
  color: red;
}
</style>
