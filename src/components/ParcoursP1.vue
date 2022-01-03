<template>
  <div class="parcours">
    <vue-typer class="text"
      :text="text"
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
  name: "ParcoursP1",
  components: { VueTyper },
  data() {
    return{    
      
      text: [ `Bonjour à toi cher(e) recruteur(euse) ! Tu te demande surment: 'Mais quel est ce Pokémon ?' et tel Pikachu faisant son attaque éclaire, je vais te résumer en quelque ligne mon parcours atypique. diplômé d'un bac dans la santé et le sociale, j'ai eu l'occasion et je dirais même la chance de travailer et de découvrir différent secteur d'activité. `] 

  }
  }
 
  
};

</script>


<style scoped>
.vue-typer{ 
  font-size: 8px;
 font-family: 'Press Start 2P', cursive;
}
</style>