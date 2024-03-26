<script setup>
import main from './components/main.vue'

</script>

<template>
  <!-- Navbar Section -->
   <nav class="navbar">
  <div class="logo-section">
    <a class="navbar-brand" href="#">
     <h1>Muse</h1> 
    </a>
  </div>
  <div class="end">
    <button type="button" class="btn2 btn-primary">events</button>
    <button type="button" class="btn btn-outline-primary">sign-up</button>
    <img src="./assets/UserAvatar.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"> 
     <div class="sign-in"><a href="">Sign in</a>
  </div></div>
 </nav>

<!-- Banner Section -->
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" >
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./assets/pic1.jpg" class="d-block w-100" alt="..." style="height: 500px;">
      <div class="carousel-caption d-none d-md-block">
        <h5>Parties</h5>
        <p>Get updates on fun-filled events.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./assets/pic2.jpg" class="d-block w-100" alt="..." style="height: 500px;">
      <div class="carousel-caption d-none d-md-block">
        <h5>Conferences</h5>
        <p>Get notified on formal settings.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./assets/pic3.jpg" class="d-block w-100" alt="..." style="height: 500px;">
      <div class="carousel-caption d-none d-md-block">
        <h5>Sports</h5>
        <p>Get all track and field events.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden" style="margin-top: 200px;">Next</span>
  </button>
</div>

<div id="lottie-container">
  <h1 class="main-caption" >Welcome, <span class="phrase">enjoy convenient <br> event management <br>with</span><span> Muse</span>.</h1>
</div>
<!-- Events section -->
<div class="events-section">
  <h3>Events</h3>
  <div class="cards">
    <div class="card" style="width: 18rem;">
       <img src="./assets/cardimage1.jpg" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary" style="color: white;">Book</a>
    </div>
</div>
    <div class="card" style="width: 18rem;">
       <img src="./assets/cardimage1.jpg" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary" style="color: white;">Book</a>
    </div>
</div>
    <div class="card" style="width: 18rem;">
       <img src="./assets/cardimage1.jpg" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary" style="color: white;">Book</a>
    </div>
</div>
    <div class="card" style="width: 18rem;">
       <img src="./assets/cardimage1.jpg" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary" style="color: white;">Book</a>
    </div>
</div>   
</div>
</div>
<hr>
<!-- Partners Section -->
<div class="partners">
  <h3>Partners</h3>
  <div class="part">
    <div class="p1">
      <img src="./assets/logos1.png" alt="">
    </div>
    <div class="p1">
      <img src="./assets/logos2.jpg" alt="">
    </div>
    <div class="p1">
      <img src="./assets/logos3.png" alt="">
    </div>
    <div class="p1">
      <img src="./assets/logos4.png" alt="">
    </div>

  </div>
</div>

<!-- Footer -->
<footer>
  <div class="content">
    All rights reserved.&copy;2024
  </div>
</footer>
</template>

<style scoped>
*{
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
}

/* Navbar section */
.navbar{
  background-color: rgb(234, 238, 240);
  padding: 0 10px 0 10px;
  align-items: center;
  justify-content: space-between; 
  display: flex;
}

a{
  text-decoration: none;
}
h1{
  color: rgb(35, 152, 248);
}
.end{
  display: flex;
}

.sign-in{
  margin-top: 3px;
  font-size: 15px;
  font-weight: bold;
}

.sign-in a{
  color: rgb(35, 152, 248);
}

.sign-in a:hover{
 color :rgb(23, 116, 192);
}
.btn{
  color: rgb(35, 152, 248);
  border-color: rgb(35, 152, 248) ;
  font-size: 12px;
  padding: 0 5px 0 5px;
  border-radius: 12px;
  font-weight: bold;
}
.btn:hover{
  color: white;
}
.btn2{
  color: white;
  background-color: rgb(35, 152, 248);
  border: none;
  font-size: 12px;
  padding: 0 5px 0 5px;
  border-radius: 12px;
  font-weight: bold;
  margin-right: 5px;
}
.btn2:hover{
  background-color:rgb(23, 116, 192);
}
/* Banner Section */
 .carousel-inner{
  height: 500px;
} 
.carousel-item {
  width: 100%;
  height: 500px; 
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}
/* welcome section */
#lottie-container{
  margin: 30px;
  padding: 10px;
}
.main-caption{
  font-weight: bolder;
  font-size: 60px;  
}
.phrase{
  color: rgba(83, 81, 81, 0.87);
}

/* Events Section */
h3{
  color: rgba(83, 81, 81, 0.87);
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 10px;
}
.events-section{
  margin: 30px;
  padding: 10px;
}
.cards{
  display: flex;
  flex-wrap: wrap;
}
.card{
  margin: 10px;
}
.card-body{
  padding: 10px;
}

/* Partners */
.part{
  margin: 30px;
  display: flex;
  justify-content: space-evenly;
}
.p1 img{
  height: 50px;
}

/* footer */
footer{
  background-color: rgb(11, 12, 12);
  justify-content: center;
  height: 200px;
}
.content{
  color: white;
  text-align: center;
}
</style>