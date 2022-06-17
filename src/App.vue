<template>
<router-link :to="{name:'mn'}" class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
 >
go to main page
</router-link>

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
