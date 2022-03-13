<template>
    <div id="News">
      <h3>{{title}}</h3>
      <ul class="ulnews">
        <li v-for="(data,index) in newslist" :key="index">{{data}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "NewsVue",
        data(){
          return{
            title:'新闻栏目',
            newslist:[
              '新闻1',
              '新闻2',
              '新闻3'
            ]
          }
        }
    }
</script>

<style scoped>
  .ulnews li{
    display: block;
  }
</style>
