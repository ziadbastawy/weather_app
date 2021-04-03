<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name:'InstaWeather'
}
</script>
<style>
#app {
  font-family: 'Work Sans';
  color: #fff;
  
}
::-webkit-scrollbar {
  background: rgba(255, 255, 255, 0.5);
  height: 6px;
}
::-webkit-scrollbar-button {
  display: none;
}
::-webkit-scrollbar-thumb {
  background:#fff;
    border: 3px solid #fff;
    border-radius: 9px;
    background-clip: content-box;
}
* {
  box-sizing: border-box;
}
</style>
