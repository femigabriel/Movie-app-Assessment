<template>
  <div class="movie-card" v-for="movie in movies" :key="movie">
    <MovieCard
      :title="movie.title"
      :year="movie.year"
      :duration="movie.duration"
      :image="movie.image"
    />
  </div>
</template>
<script>
import MovieCard from "./MovieCard.vue";
export default {
  data() {
    return {
      movies: [
        {
          title: "Movie title",
          year: "2018",
          duration: "1h53m",
          description: "description",
          date: "",
          type: "",
          age: "",
            // image: [require("../../../public/images/pics1.png")],
        },
        {
          title: "Movie title",
          year: "2018",
          duration: "1h53m",
          description: "description",
          date: "",
          type: "",
          age: "",
            // image: [require("../../../public/images/pics2.png")],
        },
      ],
    };
  },
  components: { MovieCard },
};
</script>
<style scoped>
/* .movie-card {
  display: flex;
  gap: 20px;
} */
</style>
