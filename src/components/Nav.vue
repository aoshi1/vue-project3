<template>
  <div id="box">
    <ul>
      <!--router-link会被渲染成<a>标签-->
      <li><router-link to="/home" active-class="router-link-active">首页</router-link></li>
      <!--v-bind动态设置，:即v-bind相当于a标签的href，即绑定地址-->
      <li><router-link v-bind:to="home">首页</router-link></li>
      <!--同上-->
      <li><router-link :to="{ path: 'home' }">首页</router-link></li>
      <button @click="goNews">新闻</button>
      <button @click="goBefore">前进</button>
      <button @click="goAfter">后退</button>
      <li><router-link to="/news" >新闻</router-link></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "navVue",
        data(){
          return {
            home:'/home'
          }
        },
        methods: {
          goNews(){
            this.$router.push('/news');
          },
          goBefore(){
            //后退一步记录
            this.$router.go(-1);
          },
          goAfter(){
            //前进一步记录
            this.$router.go(1);
          }
        }
    }
</script>
<!--scoped该样式只能适用于当前组件元素-->
<style scoped>
.router-link-active{
  color: red;
}
  *{
    padding: 0;
    margin: 0;
  }
  ul{
    list-style: none;
    overflow: hidden;
  }
  #box{
    width: 600px;
    margin: 100px auto;

  }
  #box ul{
    padding: 0 100px;
    background-color: #2dc3e8;
  }
  #box ul li {
    display: block;
    width: 100px;
    height: 50px;
    background-color: #2dc3e8;
    color: #fff;
    float: left;
    line-height:50px;
    text-align: center;
  }
  #box ul li:hover{
    background-color: #00b3ee;
  }
</style>
