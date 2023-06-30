<script setup>
  import { RouterView } from 'vue-router';  
  import FooterComponent from './components/FooterComponent.vue';
  import Navbar from './components/NavbarComponent.vue';
</script>

<template>
  <Navbar />
  <RouterView />
  <FooterComponent />
</template>