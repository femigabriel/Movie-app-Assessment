<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="header">
    <header class="">
      <img src="/images/logo.svg" class="logo" alt="Vite logo" />
      <form>
        <input class="input-elevated" type="text" placeholder="Search" />
      </form>
    </header>
  </div>
</template>

<style scoped>
.header {
  background: #1d283c;
  width: 100%;
  height: 80px;
}
header {
  display: flex;
  justify-content: space-between;
  padding: 25px 80px;
}
input {
  font-size: 16px;
  line-height: 1.5;
  border: 1px solid #494d61;
  border-radius: 6px;
  background: #1b1f32;
  /* background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'><path fill='%23838D99' d='M13.22 14.63a8 8 0 1 1 1.41-1.41l4.29 4.29a1 1 0 1 1-1.41 1.41l-4.29-4.29zm-.66-2.07a6 6 0 1 0-8.49-8.49 6 6 0 0 0 8.49 8.49z'></path></svg>"); */
 background-image: url("/icon/search.svg");
  background-repeat: no-repeat;
  background-position: 10px 10px;
  background-size: 20px 20px;
  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08); */
  /* width: 100%; */
  width: 331px;
  padding: 0.5em 1em 0.5em 2.5em;

}

.input::placeholder {
  color: #838d99;
}

.input:focus {
  outline: none;
  border: none;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.16);
}
</style>
