<template>
  <div class="parcours">
    <vue-typer
      :text="[`Moi pokemon de type dev `]"
      :repeat="0"
      :shuffle="false"
      initial-action="typing"
      :pre-type-delay="30"
      :type-delay="30"
      caret-animation="blink"
    ></vue-typer>
    <h3 class="title-who-am-i">Moi pokemon de type dev</h3>
  </div>
</template>


<script>
import { VueTyper } from "vue-typer";
export default {
  name: "MoiTitle",
  components: { VueTyper },
};
</script>


<style scoped>
.vue-typer{ 
  font-size: 16px;
  font-family: 'Press Start 2P', cursive;
}
</style>