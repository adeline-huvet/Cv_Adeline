<template>
  <div id="app">
   <Navbar/>
   <vue-page-transition name="flip-y">
   <router-view></router-view>
   </vue-page-transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  name: 'App',
  components: {Navbar}
}
</script>

<style lang="scss">

</style>
