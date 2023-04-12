<script setup>
import Header from "./components/auth/Header.vue";
import Details from "./components/views/Details.vue";
import Home from "./components/views/Home.vue";
import { RouterView } from "vue-router"

</script>

<template>
  <link href="https://fonts.cdnfonts.com/css/archivo" rel="stylesheet" />
  <div>
    <Header />
    <router-link to="/home">
      <Home />
    </router-link>
    <router-link to="/details">
      <Details />
    </router-link>
  
  </div>
</template>

<style scoped></style>
