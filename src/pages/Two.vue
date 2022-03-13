<template>
  <div id="two">
    <h3>{{msg}}</h3>
    <p>ID：{{ $route.params.id}}</p>
    <p>名称：{{ $route.params.name}}</p>
  </div>
</template>

<script>
export default {
  name: "twoVue",
  data(){
    return{
      msg:'这是第二个页面'
    }
  }
}
</script>

<style scoped>

</style>