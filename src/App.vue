<script setup>
import {ref, computed, createApp} from 'vue';
import login from './components/login.vue';
import signup from './components/signup.vue';
import landing from './components/landing.vue';

const routes = {
  '/' : landing,
  '/login': login,
  '/signup': signup
}

const currentPath = ref(window.location.hash || '#/');

const handleHashChange = () => {
  currentPath.value = window.location.hash;
}

const navigateTo = (path) => {
  window.location.hash = `#${path}`;
}

window.addEventListener('hashchange', handleHashChange);


const currentView = computed(() =>{
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  
  <!-- Navbar Section -->
   <nav class="navbar">
  <div class="logo-section">
    <a class="navbar-brand" href="#">
     <img src="./assets/jerry.png" alt="logo" style="width: 40px; margin-left: 20px;">
    </a>
  </div>
  <div class="end">
    <ul>
      <li>
        <a href="#">Events <img src="./assets/Events.svg" alt="event icon" style="width: 14px;"></a>
        <a href="#" @click.prevent="navigateTo('/signup')">Sign up<img src="./assets/sign-up.svg" alt="event icon" style="width: 14px;"></a>
        <a href="#" @click.prevent="navigateTo('/login')">Sign in<img src="./assets/sign-in.svg" alt="event icon" style="width: 14px;"></a>
      </li>
    </ul>
  </div>
 </nav>
 <component :is="currentView" />



<!-- Footer -->
<footer>
  <div class="row-1">
    <img src="./assets/jerry.png" alt="logo" style="width: 40px; margin: 20px;">
    <div class="search">
      <img src="./assets/search.png" alt="" class="search-img">
      <input type="text" placeholder="Search">
    </div>
  </div>
  <hr>
  <div class="row-2">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Events</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</footer>


</template>

<style>
</style>