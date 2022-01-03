<template>
  <div class="parcours">
    <vue-typer
      :text="[
        `Oh tiens, te revoilà ! ça faisait longtemps cher(e) recruteur(euse)... Ici je vais essentiellement te parler de ma personalité, et de mes softskills, en gros je vais te racconter ma vie quoi, mais faudrais pas que ça sois ennuyant alors je vais essayer d'être brève. Dans un premier temps, je suis suuuuuuuper motivé ! j'ai envie d'intégrer une équipe et d'approfondir mes compétences, mais aussi en apprendre de nouvelles, je suis curieuse j'aimerais tout savoir et vite. Ah la jeunesse je vous jure ! `,
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
  name: "MoiP1",
  components: { VueTyper },
};
</script>


<style scoped>
.vue-typer{ 
  font-size: 8px;
 font-family: 'Press Start 2P', cursive;
}
</style>