<template>
    <div class="about">
        <h2 class="who-title">Who's that Pokemon ?</h2>
      <div class="flipped-card">
        <flipper
          width="250px"
          height="380px"
          :flipped="!flipped"
          @click="onClick"
          class="card"
        >
          <div slot="front" class="front-face">
            <div class="para">
              <p>Adibou</p>
              <p>pv : 150 <i class="fab fa-vuejs vue-icon"></i></p>
            </div>
            <div>
              <img
                class="img-profile"
                src="http://www.avatarsinpixels.com/minipix/eyJIYWlyTG93ZXIiOiI1IiwiTW91dGgiOiI2IiwiUGFudHMiOiIxIiwiVG9wIjoiMTIiLCJHbGFzc2VzIjoiMyIsImhhaXJUb25lIjoiZmZlMTZjIn0=/1/show.png"
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

                <p />
                <p />
                <p class="motivation">
                  Motivation :
                  <li class="smile-emoji">
                    <i class="far fa-hand-pointer"></i>
                    <i class="far fa-hand-pointer"></i>
                    <i class="far fa-hand-pointer"></i>
                    <i class="far fa-hand-pointer"></i>
                  </li>
                <p/>

                <p />
                <p />
                <p class="team-play">
                  Teamplay :
                  <li class="hand-emoji">
                    <i class="far fa-handshake"></i
                    ><i class="far fa-handshake"></i
                    ><i class="far fa-handshake"></i
                    ><i class="far fa-handshake"></i>
                  </li>
                <p/>

                <p />
                <p />
              </div>
              <hr />
              <div class="card-descript">
                Pokémon de type junior qui serai ravis de vous rejoindre pour
                plus projet. Idéal contre la team rocket.
              </div>
            <!-- </div> -->
          </div>
          <div slot="back" class="back-face">
            <span class="click-me">Click me !</span>
            <img src="../../public/images/Pokeball.svg" class="pokeball" />
          </div>
        </flipper>
        <div class="glitch-box" v-if="flipped">
          <Glitch text="Would you like to continue ?" color="tomato"></Glitch>
        </div>
        <div class="yes-glitch" v-if="flipped">
          <a href="#about-me"><Glitch text="Yes" color="steelblue"></Glitch></a>
        </div>
        <div class="no-glitch" v-if="flipped">
          <Glitch text="No" color="steelblue"></Glitch>
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

      console.log(this.count);
    },
  },
};
</script>
<style scoped>

.about {
  display: flex;
  flex-direction : column-reverse;
  flex-wrap: wrap;
  gap: 50px;
  /* align-items: center; */
  justify-content: center;
  min-height: 800px;
   background-color: #ff7605;
}

.who-title {
  font-family: "Italiana", serif;
  align-items: center;
  margin-top: -60%;
}
.Flipper {
  position: absolute;
  margin-left: 40%;
  margin-top: 0%;
  border-radius: 15px;
  box-shadow: 10px 5px 5px rgb(163, 163, 163);
  transition: all 1s ease-out;
}

.Flipper:hover {
  margin-left: 40%;
  margin-top: 0%;
  border-radius: 15px;
  box-shadow: 10px 5px 5px rgb(163, 163, 163);
  transform: scale(1.1, 1.1);
  transition: all 1s ease-in;
  opacity: 80%;
}
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
  box-shadow: 10px 5px 5px rgb(163, 163, 163);
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
  box-shadow: 10px 5px 5px rgb(163, 163, 163);
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

h2 {
  margin-top: 15px;
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
  margin-top: -10px;
  margin-left: 4%;
  width: 100px;
  height: 100px;
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
  margin-left: 10px;
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

.me {
  border: solid 1px black;
  display: flex;
  background-color : #2a75bb;
  /* width : 100%;
  height: 100%; */
  
  /* width : 1100px; */
  
  /* display: flex; */
}
.flipped-card{
   border: solid 1px rgb(219, 23, 23);
  display: flex;
  background-color: #42b883;
  /* width : 100%;
  height: 100%; */
}
/* .parcours {
  
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
} */
.who-am-i {
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

.box {
  border-radius: 2px;
  padding: 8px;
  width: 550px;
  min-height: 150px;
  line-height: 16px;
  margin-top: 70%;
  margin-left: 30%;
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
.parcours-p1 {
  margin-left: 5px;
  margin-right: 25px;
  text-overflow: fade(10px);
}
</style>
