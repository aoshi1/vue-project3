<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Nav></Nav>
    <!--路由占位符：将路由路径所指定的组件渲染到页面中，即可以根据自己的需要，更换并渲染不同的组件，但是这都是在同一个页面下渲染的，不用渲染新的页面-->
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
