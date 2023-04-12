<template>
  <div class="movie-card" v-for="cast in casts" :key="cast">
    <CastCard
      :name="cast.name"
      :character="cast.character"
      :image="cast.image"
    />
    
  </div>
</template>
<script>
import CastCard from "./CastCard.vue";
export default {
  data() {
    return {
      casts: [
        {
          name: "Movie title",
          character: "character",
          // image: [require("../../../public/images/pics1.png")],
        },
        {
          name: "Movie title",
          character: "character",
          // image: [require("../../../public/images/pics2.png")],
        },
      ],
    };
  },
  components: { CastCard },
};
</script>
<style scoped>
/* .movie-card {
    display: flex;
    gap: 20px;
  } */
</style>
