<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="banner">
    <h3 class="featured">
      <span>Featured</span> | 2019 | Action, Sci-Fi, Drama
    </h3>
    <h1 class="title">Star Wars: The Rise of Skywalker</h1>
    <div class="rating">
      <img src="/icon/star.svg" class="logo" alt="star" />
      <p class="">9.0</p>
      <button>16 +</button>
    </div>
    <p class="description">
      The revival of Emperor Palpatine resurrects the battle between the
      Resistance and the First Order while the Jedi's legendary conflict with
      the Sith Lord comes to a head.
    </p>
    <div class="action_btn">
      <button class="watch_btn">
        <img src="/icon/play.svg" class="logo" alt="play" />
        Watch now
      </button>
      <button class="learn_btn">
        <img src="/icon/info.svg" class="logo" alt="info" />
        <a href="/details"> Learn more </a>
      </button>
    </div>
  </div>
</template>

<style scoped>
.banner {
  background: linear-gradient(
      90deg,
      rgba(27, 31, 50, 0.4) 41.56%,
      rgba(27, 31, 50, 0) 97.11%
    ),
    url(/images/movie.jpg);
  width: 100%;
  padding: 96px 112px;
  /* height: 693px;  */
}
@media (max-width: 480px) {
  .banner {
    width: ;
  }
}

.featured {
  display: flex;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
}
.featured span {
  color: #e8ba35;
  padding-right: 5px;
}
.title {
  font-weight: 600;
  font-size: 42px;
  line-height: 44px;
  color: #fdfdfd;
  padding-top: 20px;
  width: 12em;
}
.rating {
  display: flex;
  padding-top: 20px;
}
.rating p {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* padding: 5px; */
  margin-left: 5px;
  margin-top: 8px;
}
.rating button {
  margin-left: 20px;
  background: none;
  border: 1px solid #cbd1d8;
  border-radius: 100px;
  padding: 4px 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
}
.description {
  padding-top: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fdfdfd;
  width: 560px;
}
.action_btn button {
  align-items: center;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  margin-top: 40px;
  cursor: pointer;
}
.watch_btn {
  background: #3772ff;
  margin-right: 10px;
}
.learn_btn {
  background: #21354a;
}
.learn_btn a {
  text-decoration: none;
  color: #ffffff;
}
</style>
