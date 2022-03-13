<template>
  <div class="hello">
    <h1>HelloWorld.vue组件</h1>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  //组件中必须是data函数
  data(){
    return{
      msg:'Welcome to Your Vue.js App'
    }
  }
}
</script>
