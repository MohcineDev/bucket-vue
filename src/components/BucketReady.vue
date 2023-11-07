<template>
  <div class="input_container">
    <input type="text" name="" :value="bucketName" id="" />
    <button @click="generate">generate</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

let bucketName = ref("");
let bucketLangth = 25;
let alpha = "az12er15ty64u8i7o9p6qs3k2sdj21f5h4g8n9b7v5xcw";
let arratofalpha = alpha.split("");

function generate() {
    let bucket = "";
  for (let index = 0; index < bucketLangth; index++) {
    let num = Math.floor(Math.random() * arratofalpha.length);
    bucket += arratofalpha[num];
  }

  bucketName.value = bucket;
}
generate()
</script>

<style scoped>
.input_container {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  height: 15vh;
  align-items: end;
}
</style>