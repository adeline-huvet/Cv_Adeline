<template>
  <div class="parcours">
    <vue-typer
      :text="[
        `De mon diplôme dans la santé et le social, en passant par la restauration ou encore la réserve opérationnelle de la Marine, j'ai fait du chemin avant d'enfin commencer la merveilleuse aventure de la programmation. Celle-ci a débuté grâce à l'AFPA. En effet j'ai eu l'occasion d'être admise dans la formation: 'Développeur Web, Web mobile' et ça a changé ma vie ! Mais comme j'ai dit que ce ne serait que quelques lignes et que je suis sympa, je ne voudrais pas trop te spoiler et je te laisse me contacter pour plus d'informations.`
      ]"
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
import { VueTyper } from "vue-typer";
export default {
  name: "ParcoursP2",
  components: { VueTyper },
};
</script>


<style scoped>
.vue-typer{ 
  font-size: 8px;
  font-family: 'Press Start 2P', cursive;
}
</style>