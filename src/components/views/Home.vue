<template>
  <div class="home_page">
    <Banner />
    <div class="movie_card">
      <div class="title">
        <h3>Movies for you</h3>
        <div class="div">
          <MovieLists />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Banner from "../home/Banner.vue";
import MovieCard from "../home/MovieCard.vue";
import MovieLists from "../home/MovieLists.vue";


</script>
<style scoped>
.home_page {
}
.movie_card {
  padding: 48px 112px 64px;
  color: #fdfdfd;
}
.title h3 {
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #fdfdfd;
  margin-bottom: 40px;
}
</style>
