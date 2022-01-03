<template>
  <div class="home">
    <div class="main-container">
      <div class="my-name">
        <h2>Adeline Huvet</h2>
        </div> 
      <div class="title">
        <vue-typer class="text"
          :text="[
            'Développeuse Web junior, Fullstack.',
            ':)'  
          ]"
        
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

      <div class="social-network">
        <ul class="network-group">
             <a href="https://fontawesome.com/v5.15/icons/linkedin?style=brands"><li class="network-item-git"><i class="fab fa-github fa-3x"> </i></li></a>
            <a href="https://fontawesome.com/v5.15/icons/linkedin?style=brands"><li class="network-item-link"><i class="fab fa-linkedin fa-3x"></i></li></a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";
export default {
  name: "Home",
  components: { 
      VueTyper
      },
     
};
</script>

<style scoped>

/* .my-name{
  margin-right: 80%;
  margin-top: -8%;
} */
h2{
  font-family: 'Italiana', serif;
  font-size: 300%;
  
}

.home{
  position: fixed;
  height: 100vh;
  width: 100%;
  background-size: 100% 100%;
  top: 0;
  z-index: -10;
  background-image: url("https://www.pokebip.com/membres/galeries/1545/1545149884015718400.png");
}
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15%;
  
}

.vue-typer {
    font-family: 'Rambla', sans-serif;
    font-size: 3.5rem;
    
    
}
.text {
  color: #607D8B;
}
.network-group{
    list-style: none;
    margin-top: 20px;
}
.network-item-git{
    display: inline-block;
    margin: 7px;
    color: #171515;
    opacity: 70%;    
}
.network-item-link{
   display: inline-block;
    margin: 7px;
    color:  #0e76a8;
    opacity: 70%;
}
.network-item-git:hover{
  display: inline-block;
    margin-right: 35px;
    color:  #dbdbdb;
    transform:scale(2,2);
    transition: all 0.5s ease-out;
} 
.network-item-link:hover{
  display: inline-block;
    margin-left: 35px;
    color:  #dbdbdb;
    transform:scale(2,2);
    transition: all 0.5s ease-out;
}

</style>