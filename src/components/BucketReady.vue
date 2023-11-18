<template>
  <div class="input_container">
    <input type="text" name="" :value="bucketName" @focus="e=> e.target.select() "/>
    <button @click="generate">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#198fe7"
        class="w-6 h-6"
      >
        <path
          fill-rule="evenodd"
          d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const bucketName = ref("");
const a = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
const alpha = "ad876az12er15ty64u8i7o9p6qs3k2sdj21f5h4g8n9b7v545xcw";
const arrayOfAlpha = alpha.split("");

function generate() {
let bucketLength = Math.floor(Math.random() * a.length);

  let bucket = "";
  for (let index = 0; index < a[bucketLength]; index++) {
    let num = Math.floor(Math.random() * arrayOfAlpha.length);
    bucket += arrayOfAlpha[num];
  }

  bucketName.value = bucket;
}
generate();
</script>

<style scoped>
.input_container {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  height: 15vh;
  align-items: end;
}
input {
  height: 20px;
  text-align: center;
  border-radius: 5px;
  padding: 5px 8px;
  border: none;
  border-left: 3px solid #198fe7;
  border-right: 3px solid #198fe7;
  font-size: 1rem;
  box-shadow: 0 5px 10px 0px #dfffff;
}
input::selection{
    background-color: #198fe7;
    color: #fff;
}
button {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 30px;
  padding: 0;
  margin-left: 10px;
  cursor: pointer;
}
svg {
  width: 20px;
  height: 22px;
}
</style>