<template>
  <div class="about">
    <h2 class="who-title">Who's that Pokemon ?</h2>
    <div class="flipped-card">
      <flipper
        width="250px"
        height="380px"
        :flipped="!flipped"
        @click="onClick"
        
      >
        <div slot="front" class="front-face">
          <div class="para">
            <p>Adibou</p>
            <p>pv : 150 <i class="fab fa-vuejs vue-icon"></i></p>
          </div>

          <div>
            <img
              class="img-profile"
              src="../../public/images/photo-profile.jpg"
            />
          </div>

          <div class="soft-skills">
            <p class="humour">
              Humour :
              <li class="laught-emoji">
                <i class="far fa-grin-squint-tears"></i>
                <i class="far fa-grin-squint-tears"></i>
                <i class="far fa-grin-squint-tears"></i>
              </li>
            <p/>

            

            <p class="motivation">
              Motivation :
              <li class="smile-emoji">
                <i class="far fa-hand-pointer"></i>
                <i class="far fa-hand-pointer"></i>
                <i class="far fa-hand-pointer"></i>
                <i class="far fa-hand-pointer"></i>
              </li>
            <p/>

           

            <p class="team-play">
              Teamplay :
              <li class="hand-emoji">
                <i class="far fa-handshake"></i><i class="far fa-handshake"></i
                ><i class="far fa-handshake"></i
                ><i class="far fa-handshake"></i>
              </li>
           

            <p />
          </div>
          <hr />
          <div class="card-descript">
            Pokémon de type junior qui serai ravis de vous rejoindre pour plus
            de projet. Idéal contre la team rocket.
          </div>
        </div>
        <div slot="back" class="back-face">
          <span class="click-me">Click me !</span>
          <img src="../../public/images/Pokeball.svg" class="pokeball" />
        </div>
      </flipper>

      <div class="glitch-box" v-if="flipped">
        <Glitch text="Would you like to continue ?" color="tomato" background="rgb(207, 203, 203)"></Glitch>
      </div>

      <div class="yes-glitch" v-if="flipped">
        <a href="#about-me" class="link-glitch"><Glitch text="Yes" color="steelblue" background="rgb(207, 203, 203)"></Glitch></a>
      </div>

      <div class="no-glitch" v-if="flipped">
        <b-link class="link-glitch" :to="{path: '/'}">
        <Glitch text="No" color="steelblue" background="rgb(207, 203, 203)"></Glitch>
        </b-link>
      </div>
    </div>

    <div class="me" id="about-me" v-if="flipped">
      <div class="box" id="type-writer">
        <div class="show">
          <ParcoursTitre v-if="count === 0"></ParcoursTitre>
          <ParcoursP1 v-if="count === 1" class="parcours-p1"></ParcoursP1>
          <ParcoursP2 v-if="count === 2"></ParcoursP2>
          <MoiTitle v-if="count === 3"></MoiTitle>
          <MoiP1 v-if="count === 4"></MoiP1>
          <MoiP2 v-if="count === 5"></MoiP2>
        </div>
        <i @click="nextText"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Flipper from "vue-flipper";
import Glitch from "vue-glitch";
import ParcoursP1 from "../../src/components/ParcoursP1.vue";
import ParcoursP2 from "../../src/components/ParcoursP2.vue";
import ParcoursTitre from "../../src/components/ParcoursTitre.vue";
import MoiTitle from "../../src/components/MoiTitle.vue";
import MoiP1 from "../../src/components/MoiP1.vue";
import MoiP2 from "../../src/components/MoiP2.vue";

export default {
  name: "About",
  components: {
    Flipper,
    Glitch,
    ParcoursP1,
    ParcoursP2,
    ParcoursTitre,
    MoiTitle,
    MoiP1,
    MoiP2,
  },

  data() {
    return {
      flipped: false,
      count: 0,
    };
  },
  methods: {
    onClick() {
      this.flipped = !this.flipped;
    },
    nextText() {
      this.count = this.count + 1;
      if (this.count > 5) {
        return (this.count = 0);
      }
    },
  },
};
</script>
<style scoped>
@media screen and (max-width: 1024px) {
  /* container principal */
  .about{
    /* ajout d une taille fixe et tout ce qui depasse en hidden */
    /* le probleme ne venai pas de la shadow */
    /* mais du fonctionnement du flipper en lui meme */
    width: 100vw;
    overflow: hidden;
  }
  /* contenu card animé */
   .flipped-card{
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     vertical-align: middle;
     justify-content: center;
     flex-wrap: wrap;
     width: 100%;
     height: 100%;
     
   }
  .Flipper, .back-face, .front-face{
  min-width :250px;
  margin-left: -35%;
  margin-top : 2%;
  flex-shrink: 1;
  }
  .back-face, .front-face{
    position: absolute;
    top: 30px;
    left: 10px;
  }
  .Flipper{
    position: relative;
  display: flex;
  width:100%;
  }
  

.me {
  background-size: 100% !important;
  background-position: center !important;
  
}
  .who-title {
     width: 100%;
  }
  .glitch-box, .yes-glitch, .no-glitch {
  display: none;
}
.box{
  width: 80%;
 
}
}
/* container principal */
.about {
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  background-color: rgb(207, 203, 203);
}
/* contenu card animé */
.flipped-card {
  margin-top: 10px;
  display: flex;
  height: 75vh;
  margin-bottom: 15px;
}

.me {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
  height: 100vh;
  background-image: url("../../public/images/fond-about.jpg");
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: bottom 0% right 50%;
}

.who-title {
  font-family: "Italiana", serif;
  align-items: center;
  width: 100%;
 
}

.Flipper {
  position: relative;
  margin-left: 40%;
  margin-bottom: 60px;
  border-radius: 15px;
  transition: all 1s ease-out;
}

.Flipper:hover {
  transform: scale(1.1, 1.1);
  transition: all 1s ease-in;
  /* opacity: 80%; */
}

/* dispostion text card */
.back-face {
  text-align: center;
  background-color: #2a75bb;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 7px solid #ffcb05;
  border-radius: 15px;
  
}

.front-face {
  font-family: "Genos", sans-serif;
  background-color: #87cefa;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 7px solid #ffcb05;
  border-radius: 15px;
  
}

.back-face .click-me {
  display: none;
}
.back-face:hover .click-me {
  font-family: "Bebas Neue", cursive;
  display: inline;
  position: absolute;
  top: 15%;
  left: 35%;
  font-size: 25px;
}

.pokeball {
  margin-top: 45%;
  width: 40%;
  height: 40%;
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
  margin-top: -5px;
  margin-bottom: -40px;
  left: 32.5%;
  width: auto;
  height: 150px;
  position: relative;
  overflow: auto;
  clip-path:circle(30% at 55% 37.5%);
}
.soft-skills {
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  row-gap: 10px;
  column-gap: 10px;
}

.humour {
  display: inline-block;
  font-size: 90%;
  margin-left: 10px;
}
.motivation {
  display: inline-block;
  font-size: 90%;
  margin-top: -10px;
  margin-left: 10px;
}
.team-play {
  display: inline-block;
  font-size: 90%;
  margin-top: -10px;
  margin-left: 10px;
}
.laught-emoji {
  list-style: none;
  display: inline-block;
  margin-left: 20px;
  letter-spacing: 2px;
}
.smile-emoji {
  list-style: none;
  display: inline-block;
  margin-left: 10px;
  margin-top: -10px;
  letter-spacing: 5px;
}
.hand-emoji {
  list-style: none;
  display: inline-block;
  margin-top: -10px;
  margin-left: 10px;
  letter-spacing: 5px;
}
.card-descript {
  font-size: 90%;
  margin-top: 10px;
  margin-left: 10px;
}
hr {
  margin-top: -2px;
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
.glitch-box {
  position: absolute;
  top: 300px;
  left: 45px;
}
.yes-glitch {
  position: absolute;
  top: 300px;
  right: 300px;
}
.no-glitch {
  position: absolute;
  top: 300px;
  right: 150px;
}
.link-glitch{
  text-decoration: none;
}

.box {
  border-radius: 2px;
  padding: 8px;
  width: 60%;
  min-height: 150px;
  line-height: 16px;
  background: white;
  border: 1px solid white;
  box-shadow: 0 1px 0 1px black, inset 0 1px 0 1px black, 0 0 0 1px black,
    inset 0 0 0 1px black;
}
.box > i {
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-top-color: black;
  margin-top: 23px;
  animation: bounce 0.5s ease-in-out 0 infinite alternate;
  float: right;
}
</style>
