<template>
    <div>
  <b-navbar class="navbar d-flex justify-content-evenly" toggleable="lg" type="dark" variant="dark">
      <b-navbar-nav>
        <b-link class="nav-link" :to="{path: '/'}">Home</b-link>
        <b-link class="nav-link" :to="{path: '/about'}">Who's that pokemon ?</b-link>
        <b-link class="nav-link" :to="{path: '/skills'}">Skills</b-link>
      </b-navbar-nav>
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