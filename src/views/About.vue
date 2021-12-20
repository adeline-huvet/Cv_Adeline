<template>
  <div class="about">
    <h2>
      Who's that
      <img src="../../public/images/pokemon-logo.jpeg" class="pokemon" /> ?
    </h2>
    <flipper width="230px" height="330px" :flipped="!flipped" @click="onClick">
      <div slot="front" class="front-face">
        <div class="para">
          <p>Adibou</p>
          <p>pv : 150 <i class="fab fa-vuejs vue-icon"></i></p>
        </div>
        <div>
          <img class="img-profile" src="https://via.placeholder.com/200x100" />
        </div>
      </div>
      <div slot="back" class="back-face">
        <img src="../../public/images/Pokeball.svg" class="pokeball" />
      </div>
    </flipper>
    <div class="about-me">
      <div class="who">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate vero natus nam iusto unde culpa, adipisci consequuntur eius maiores quod impedit debitis delectus sapiente libero! Voluptate eum ex dolorem laudantium?
        Delectus autem consequuntur dignissimos ea eum natus officiis vel quae, laudantium ipsam ducimus, exercitationem aperiam odio! Repudiandae et eveniet voluptatum fugiat autem! Laudantium quisquam sequi modi consequuntur facilis incidunt ab.</p>
      </div>

      <div class="who2">
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate vero natus nam iusto unde culpa, adipisci consequuntur eius maiores quod impedit debitis delectus sapiente libero! Voluptate eum ex dolorem laudantium?
        Delectus autem consequuntur dignissimos ea eum natus officiis vel quae, laudantium</p>
      </div>
    </div>
  </div>
</template>

<script>
import Flipper from "vue-flipper";
export default {
  name: "About",
  components: { Flipper },
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
.fron-face {
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
.about-me{
  display: flex;
  
}
.who{
  /* display: none; */
  width: 20%;
  height: 20%;
  border: solid 1px black;
  margin-left: 10%;
  margin-top: 10%;
}
.who2{
  /* display: none; */
  width: 20%;
  height: 20%;
  border: solid 1px black;
  margin-left: 15%;
  margin-top: 10%;
}
</style>
