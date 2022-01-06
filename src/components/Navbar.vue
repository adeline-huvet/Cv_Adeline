<template>
    <div>
  <b-navbar  toggleable="lg" type="dark" variant="dark">
   <b-navbar-toggle class="ms-3" target="nav-collapse"></b-navbar-toggle>
         <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ms-3">
        <b-link class="nav-link" :to="{path: '/'}">Home</b-link>
        <b-link class="nav-link" :to="{path: '/about'}">Who's that pokemon ?</b-link>
        <b-link class="nav-link" :to="{path: '/skills'}">Skills</b-link>  
      </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</div>
</template>

<script>

export default {
 name: 'Navbar',
  
}

</script>

<style scoped>



</style>