<template>
  <div class="card">
    <img src="/images/pics3.png" alt="" />
    <div class="movies_info">
      <h3>{{ name }}</h3>
      <p>
        {{ character }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["name", "character", "image"],
  data() {
    return {};
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
}
.movies_info h3 {
  margin-top: 20px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}
.movies_info p {
  color: #e0e3e8;
  margin-top: 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
}
</style>
