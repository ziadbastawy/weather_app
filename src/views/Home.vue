<template>
  <div class="home">
    <div class="container">
      <navbar />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    navbar: () => import('../components/navbar')
  }
}
</script>

<style>
.home {
  height: 100vh;
  width: 100%;
  background-image: url("./../assets/Background.png");
  background-position: center;
  background-size: cover;

}
.container{ 
  margin: auto;
  width: 90%;
  /* background: #f00; */
  height: 50vh;
  
}
</style>
