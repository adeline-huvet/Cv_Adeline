<template>
 <div class="moi">
      <vue-typer 
          :text="[
          `Je suis très attachée au travail d'équipe et c'est une qualité que j'ai eu l'occasion d'approfondir avec l'esprit d'équipage dans la Marine. Bien que ravie de découvrir des technologies seule, je ressens le besoin d'échanger avec mes pairs pour m'améliorer et grandir. Quoiqu'un peu réservée dans l'inconnu, j'aime énormément l'échange et le dialogue. Pfffiouuuu ! Promis j'ai fait le plus court possible ! La suite au prochain épisode. `   
          ]"
        
          :repeat="0"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="30"
          :type-delay="30"
          caret-animation="blink"
          style="line-break: auto;"
        ></vue-typer>
       
         
      </div>
    
</template>


<script>
import { VueTyper } from "vue-typer";
export default {
    name: 'MoiP2',
    components : {VueTyper}
      
}
</script>


<style scoped>
.vue-typer{ 
display: block;
font-size: 8px;
font-family: 'Press Start 2P', cursive;
  
}


</style>