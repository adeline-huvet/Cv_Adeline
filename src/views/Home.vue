<template>
  <div class="home">
    <div class="main-container">
      <h2>Adeline Huvet</h2>
      <div class="title">
        <vue-typer
          class="text"
          :text="['Développeuse Web junior, Fullstack.']"
          :repeat="Infinity"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="70"
          :type-delay="70"
          :pre-erase-delay="2000"
          :erase-delay="250"
          erase-style="clear"
          :erase-on-complete="false"
          caret-animation="blink"
        ></vue-typer>
      </div>
    </div>
    <div class="social-network">
      <ul class="network-group">
        <li class="network-item-git">
          <a href="https://github.com/adeline-huvet">
            <i class="fab fa-github fa-3x"></i>
          </a>
        </li>
        <li class="network-item-link">
          <a
            href="https://www.linkedin.com/in/adeline-huvet-a0640b20a/?originalSubdomain=fr"
          >
            <i class="fab fa-linkedin fa-3x"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";
export default {
  name: "Home",
  components: {
    VueTyper
  }
};
</script>

<style scoped>
@media screen and (max-width: 900px) {
  h2 {
    transform: translateY(5.5rem);
    margin-right: auto;
    margin-left: 20px;
  }
  .title {
    margin-right: auto;
    margin-left: 20px;
    transform: translateY(40px);
  }
  .vue-typer,
  .custom.char {
    font-size: 2px;
  }
  .social-network {
    left: 30%;
    position: absolute;
    bottom: 40px;
  }
}
h2 {
  font-family: "Italiana", serif;
  font-size: 300%;
  margin-right: 52rem;
  margin-top: -5rem;
}

.home {
  position: fixed;
  height: 100vh;
  width: 100%;
  background-size: 100% 100%;
  top: 0;
  z-index: -10;
  background-image: url("../../public/images/fond-home.png");
}
.main-container {
  display: flex;
  flex-wrap: wrap;
  /* position: relative; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15%;
}

.vue-typer {
  font-family: "Rambla", sans-serif;
  font-size: 3.5rem;
}
.text {
  color: #607d8b;
}
.title {
  margin-top: 70px;
}
.network-group {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
}
.network-item-git {
  margin: 7px;
  margin-right: 15px;
  color: #171515;
  transition: all 0.5s ease-out;
}
.network-item-link {
  margin: 7px;
  margin-left: 15px;
  color: #0e76a8;
  transition: all 0.5s ease-out;
}
.network-item-git:hover {
  transform: scale(2, 2);
  transition: all 0.5s ease-in;
}
.network-item-link:hover {
  transform: scale(2, 2);
  transition: all 0.5s ease-in;
}
</style>
