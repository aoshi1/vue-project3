<template>
  <div id="one">
    <h3>{{msg}}</h3>
    <h2>{{$route.params.username}}</h2>
  </div>
</template>

<script>
export default {
  name: "OneVue",
  data(){
    return {
      msg:'这是第一个子页面'
    }
  }
}
</script>

<style scoped>

</style>
