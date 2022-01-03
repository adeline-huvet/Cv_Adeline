<template>
  <div class="parcours">
    <vue-typer
      :text="[`Mon parcours`]"
      :repeat="0"
      :shuffle="false"
      initial-action="typing"
      :pre-type-delay="30"
      :type-delay="30"
      caret-animation="blink"
    ></vue-typer>
  </div>
</template>


<script>
export default {
  components: "ParcoursTitre",
};
</script>


<style scoped>
.vue-typer{ 
  font-size: 16px;
  font-family: 'Press Start 2P', cursive;
}
</style>