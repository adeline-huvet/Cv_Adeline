<template>
  <div class="about">
    <h2 v-bind:style="{ color: ourColor }">
      Who's that
      <img src="../../public/images/pokemon-logo.jpeg" class="pokemon" /> ?
    </h2>
    <flipper width="250px" height="380px" :flipped="!flipped" @click="onClick">
      <div slot="front" class="front-face">
        <div class="para">
          <p>Adibou </p>
          <p>pv : 150 <i class="fab fa-vuejs vue-icon"></i></p>
        </div>
        <div>
          <img class="img-profile" src="https://via.placeholder.com/200x100" />
          <div class="soft-skills">
            <p class="humour">Humour : <li class="laught-emoji"><i class="fas fa-grin-squint-tears"></i> <i class="fas fa-grin-squint-tears"></i> <i class="fas fa-grin-squint-tears"></i></li><p/>
            <p class="motivation">Motivation : <li class="smile-emoji"><i class="fas fa-grin-squint-tears"></i><i class="fas fa-grin-squint-tears"></i><i class="fas fa-grin-squint-tears"></i><i class="fas fa-grin-squint-tears"></i></li><p/>
            <p class="team-play">Teamplay : <li class="hand-emoji"><i class="far fa-handshake"></i><i class="far fa-handshake"></i><i class="far fa-handshake"></i><i class="far fa-handshake"></i></li><p/>
          </div>
          <div class="card-descript">
            Pokémon de type junior qui serai ravis de vous rejoindre pour plus projet. Idéal contre la team rocket.
          </div>
        </div>
      </div>
      <div slot="back" class="back-face">
        <img src="../../public/images/Pokeball.svg" class="pokeball" />
      </div>
    </flipper>
  <div class="glitch-box" v-if="flipped">
    <Glitch text="Would you like to continue ?" color="tomato"></Glitch>
  </div>
  <div class="second-glitch-box" v-if="flipped">
    <Glitch text="Scroll on bottom ?" color="steelblue"></Glitch>
  </div>
    <div class="about-me" v-if="flipped">
      <div class="parcours">
        <h3 class="title-parcours">Mon parcours</h3>
        <p class="text-parcours">
          Bonjour à toi cher(e) recruteur(euse) ! Tu te demande surment: "Mais
          quel est ce Pokémon ?" et tel Pikachu faisant son attaque éclaire, je
          vais te résumer en quelque ligne mon parcours atypique. diplômé d'un
          bac dans la santé et le sociale, j'ai eu l'occasion et je dirais même
          la chance de travailer et de découvrir différent secteur d'activité.
          De mon diplôme dans la santé et le social, en passant par la
          restauration ou encore la réserve opérationnelle de la Marine, j'ai
          fais du chemin avant d'enfin commencer la merveilleuse aventure de la
          programmation. Celle ci à débuté grâce à l'AFPA, en effet j'ai eu
          l'occasion d'être admise dans la formation: "Developpeur Web, Web
          mobile" et ça a changer ma vie ! Mais comme j'ai dis que quelque ligne
          et que je suis sympa, je voudrais pas trop te spoiler je te laisse me
          contacter pour plus d'information.
        </p>
      </div>

      <div class="who-am-i">
        <h3 class="title-who-am-i">Moi</h3>
        <p class="text-who-am-i">
          Oh tiens, te revoilà ! ça faisait longtemps cher(e) recruteur(euse)...
          Ici je vais essentiellement te parler de ma personalité, et de mes
          softskills, en gros je vais te racconter ma vie quoi, mais faudrais
          pas que ça sois ennuyant alors je vais essayer d'être brève. Dans un
          premier temps, je suis suuuuuuuper motivé ! j'ai envie d'intégrer une
          équipe et d'approfondir mes compétences, mais aussi en apprendre de
          nouvelles, je suis curieuse j'aimerais tout savoir et vite. Ah la
          jeunesse je vous jure ! Je suis très attaché au travail d'équipe et
          ces une qualité que j'ai eu l'occasion d'approfondir avec l'esprit
          d'équipage dans la Marine. Bien que ravis d'avoir la satisfaction de
          découvrir des technologies seule, je ressens le besoin d'échanger avec
          mes pairs pour m'amélioré et grandir . Quoi que réservé dans
          l'inconnu, j'aime énormément l'échange et le dialogue. pfffiouuuu !
          Promis j'ai fais le court possible ! La suite au prochain épisode
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Flipper from "vue-flipper";
import Glitch from 'vue-glitch';
export default {
  name: "About",
  components: { Flipper, Glitch },

  data() {
    return {
      flipped: false,
    };
  },
  methods: {
    onClick() {
      this.flipped = !this.flipped;
    },
  },
};
</script>
<style scoped>
.Flipper {
  background-color: #2a75bb;
  margin-left: 40%;
  margin-top: 0.05rem;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  width: 100px;
  height: 100px;
  border: 7px solid #ffcb05;
}
.back-face {
  text-align: center;
  margin-top: 100px;
}

.pokeball {
  width: 40%;
  height: 40%;
}
.pokemon {
  width: 15%;
  height: 15%;
}
.about h2 {
  margin-top: -20px;
}
.para {
  margin-top: 5px;
  margin-left: 5px;
  display: flex;
  justify-content: space-between;
  font-size: 90%;
}
.vue-icon {
  border: solid 1px black;
  border-radius: 100% 100% 100% 100%;
  background-color: #42b883;
  margin-left: 10px;
  margin-right: 5px;
}
.img-profile {
  margin-left: 4%;
}
.soft-skills{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  row-gap: 10px;
  column-gap: 10px;
}

.humour{
  display: inline-block;
  font-size: 90%;
}
.motivation{
display: inline-block;
 font-size: 90%;
}
.team-play{
display: inline-block;
font-size: 90%;
}
.laught-emoji {
  list-style: none;
  display: inline-block;
  margin-left: 10px;
  letter-spacing: 2px;
  
}
.smile-emoji{
list-style: none;
  display: inline-block;
  margin-left: 10px;
  letter-spacing: 5px;
  
}
.hand-emoji{
  list-style: none;
  display: inline-block;
  margin-left: 10px;
  letter-spacing: 5px;
}
.card-descript{
   font-size: 90%;
}

.about-me {
  /* display: flex; */
}
.parcours {
  /* display: none; */
  width: 50%;
  height: 400px;
  border: solid 1px black;
  margin-left: 5%;
  margin-top: 10%;
  background-color: rgb(173, 170, 170);
}
.title-parcours{
  font-family: 'Italianno', cursive;
  text-align: center;
  margin-top: 5%;
  margin-bottom: 5%;
}
.text-parcours{
  font-family: 'Vesper Libre', serif;
  font-size: 0.95rem;
  text-align: center;
  margin-left: 5%;
  margin-right: 5%;
}
.who-am-i {
  /* display: none; */
  width: 50%;
  height: 400px;
  border: solid 1px black;
  margin-left: 15%;
  margin-top: 10%;
}
.glitch {
  margin-bottom: 20px;
  padding: 20px;
  font-size: 5px;
}

.glitch-wrapper {
  font-family: sans-serif;
  font-size: 30px;
}
.glitch-box{
 position: absolute;
 top: 300px;
 left: 45px;
}
.second-glitch-box{
  position: absolute;
 top: 300px;
 right: 150px;
}
</style>
