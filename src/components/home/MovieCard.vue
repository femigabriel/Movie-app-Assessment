<template>
  <div class="card">
    <!-- <img src={{ image }} class="movie_pics" alt="movie-pics" /> -->
    <!-- <div>{{ image }}</div> -->
    <img src="/images/pics1.png" class="movie_pics" alt="" />
    <div class="movies_info">
      <h3>{{ title }}</h3>
      <p>
        <span class="year"> {{ year }}</span> |
        <span class="duration"> {{ duration }}</span>
      </p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: [
    "title",
    "year",
    "duration",
    "rating",
    "description",
    "date",
    "type",
    "age",
    "image",
  ],
  data() {
    return {
      results: "",
    };
  },
  methods: {
    getResult(query) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US" +
            query
        )
        .then((response) => {
          this.results = response.data.results;
        });
      console.log(this.results);
      const getMovies = async () => {
        movies.value = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
        )
          .then((res) => res.json())
          .then((res) => res.results);
        console.log({ res });
      };
    },
  },
};
</script>

<style scoped>
.card {
}
.movie_pics {
  width: 199px;
  height: 266px;
  background: #cee8ef;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
}
.movie_pics:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transform: scale(1.1);
  -webkit-transition: all 200ms ease-in;
  -webkit-transform: scale(1.1);
  -ms-transition: all 200ms ease-in;
  -ms-transform: scale(1.1);
  -moz-transition: all 200ms ease-in;
  -moz-transform: scale(1.1);
  transition: all 200ms ease-in;
}

.movies_info h3 {
  margin-top: 20px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}
.movies_info p {
  color: #7b808b;
  margin-top: 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
}
.movies_info span {
  color: #e0e3e8;
}
.year {
  margin-right: 10px;
}
.duration {
  margin-left: 10px;
}
</style>
