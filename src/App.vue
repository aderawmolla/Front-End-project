<template>
<router-link :to="{name:'mn'}">main</router-link>
<router-view></router-view>
</template>
<script setup>
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #185491;
}
.m {
  padding: 0.5em;
}
.link{
border:2px solid blueviolet;
margin:20px;
color:darkgreen;
}
</style>
