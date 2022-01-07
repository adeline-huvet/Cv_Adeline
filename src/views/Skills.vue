<template>
  <div class="about-skill">
    <h1 class="h1-title">Skills</h1>
    <div class="all-card">
      <div v-for="skill in skills" v-bind:key="skill.id" class="card-item">
      <div class="image">
        <img class="pictures" v-bind:src="skill.img"/>
      </div>
      <div class="body-card">
        <p class="title">{{skill.title}}</p>
        <p class="where">Découvert {{skill.where}}</p>
        <p class="co"> {{skill.comment}}</p>

      </div>
    </div>
    </div>
  </div>

  
</template>
<script>
export default {
    name: "Skills",
    data(){
      return{ 
        skills
      }
      
    }
}
 const skills = [ 
        { id: 1, title: 'Javascript', img: require('../../public/images/javascript.png'), where: 'En formation', comment: 'La première colère'},
        { id: 2, title: 'React.js', img:  require('../../public/images/react.png'), where: 'En stage', comment: 'Amour and passion by React'},
        { id: 3, title: 'Next.js', img:  require('../../public/images/nextjs.png'), where: 'Sur mon temps libre', comment: `Le framework d'un framework`},
        { id: 4, title: 'Vue.js', img:  require('../../public/images/vue.png'), where: 'Sur mon temps libre', comment: 'Passion en Vue !'},
        { id: 5, title: 'PHP', img:  require('../../public/images/php.png'), where: 'En formation', comment: 'Découverte du côté obscure'},
        { id: 6, title: 'Symfony', img:  require('../../public/images/symfony.png'), where: 'En formation', comment: 'What the hell ?'},
        { id: 7, title: 'MySql', img:  require('../../public/images/mysql.png'), where: 'En formation', comment: 'INSERT knowledge INTO user'},

        
       

      ]

</script>

<style scoped>
body{
  
}
.container{ 
   display : flex;
  align-items : center;
  justify-content : center;  
  min-height : 800px;
 
}
.about-skill{
   position : relative;
  width: 100%;
  display : flex;
  align-items : center;
  justify-content : center;
  flex-wrap : wrap;
  padding : 30px;
  background-color: 	#353935; 

}
.h1-title{
   font-family: 'Italiana', serif;
   text-align: center;
  

   
}
.all-card{
  margin-top: 10%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 10px;
  gap: 10px 20px; /* row-gap column gap */
  row-gap: 100px;
  column-gap: 20px;
}
.card-item{
   position: relative;
   max-width : 300px;
   height : 215px;  
   background-color : #fff;
   margin : 30px 10px;
   padding : 20px 15px;
   display : flex;
   flex-direction : column;
   box-shadow : 0 5px 20px rgba(0,0,0,0.5);
   transition : 0.3s ease-in-out;
   border-radius : 15px;
}
.image{
   border-radius : 15px;
   margin-left: -3%;
   background-color: #3f423f60;
  
 
}
.card-item:hover{
  height : 320px; 
}
.card-item .image{
  position : relative;
   width : 260px;
   height : 260px;
   top : -50%;
   left: 8px;
   box-shadow : 0 5px 20px rgba(0,0,0,0.2);
   z-index : 1;
}
.card-item .image img{
  max-width : 100%;
   border-radius : 15px;
   
}
img{
  margin-top: 10px;
}
.card-item .body-card{
   position : relative;
   top : -140px;
   padding : 10px 15px;
   color : #111;
   text-align : center;
   visibility : hidden;
   opacity : 0;
   transition : 0.3s ease-in-out;
}
.card-item:hover .body-card{
   margin-top : 30px;
    visibility : visible;
    opacity : 1;
    transition-delay: 0.2s; 
}



.title{
  /* margin-left: 20%; */
   text-align: center;
   margin-top: -15px;
   font-family: 'Luxurious Roman', cursive;
   font-weight: bold;
   font-size: 20px;

}
.body-card .where{ 
  text-align: center;
  margin-top: 12%;
  font-family: 'Genos', sans-serif;
}
.co{
  font-family: 'Genos', sans-serif;
}
.pictures{
  width: 90%;
  height:90%;
  margin-left: 5%;
  
  
}
.where{
  text-align: center;
  margin-top: 20%;
}
</style>