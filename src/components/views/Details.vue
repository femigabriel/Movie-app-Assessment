<template>
  <div class="home_page">
    <MovieDetails />
    <div class="movie_card">
      <div class="cast_card">
        <h3>Cast</h3>
        <div class="div">
          <CastLists />
        </div>
      </div>
      <div class="like_card">
        <h3>You might also like</h3>
        <div class="div">
          <MovieLists />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// const getMovies = async () => {
//   movies.value = await fetch(
//     "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
//   )
//     .then((res) => res.json())
//     .then((res) => res.results);
//   console.log({ results });
// };
import CastLists from "../details/CastLists.vue";
import MovieDetails from "../details/MovieDetails.vue";
import MovieLists from "../home/MovieLists.vue";
</script>
<style scoped>
.home_page {
}
.movie_card {
  padding: 48px 112px 64px;
  color: #fdfdfd;
}
.movie_card h3 {
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #fdfdfd;
  margin-bottom: 40px;
}
.like_card {
  padding-top: 40px;
}
</style>
