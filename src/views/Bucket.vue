<template>
  <BucketReady />
  <section class="middle">
    <div class="containerad">
      <img
      :src="src2"
        alt="ad"
        id="img1"
      />
    </div>
    <Bucket />
    <div class="containerad">
      <img :src="src1" alt="ad" id="img2" />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Bucket from "../components/Bucket.vue";
import BucketReady from "../components/BucketReady.vue";

let src1 = ref();

let src2 = ref();
let imgnb =  Math.floor(Math.random() * 18);  
console.log(13132)
src1.value = `https://raw.githubusercontent.com/MohcineDev/bucket/main/imgs/img${imgnb}.webp`;
src2.value = `https://raw.githubusercontent.com/MohcineDev/bucket/main/imgs/img${imgnb < 17 ? imgnb + 1 : 0}.webp`;
 
</script>

<style scoped>
body {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: var(--ui_blue);
  margin: 0;
  align-items: center;
  position: relative;
}
.buckets {
  width: 90%;
  min-height: 200px;
  padding: 1rem;
  position: relative;
}

.buckets .wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  padding-bottom: 2rem;
}

.buckets input {
  background-color: transparent;
  border: 1px solid var(--ui_blue);
  padding: 5px;
  color: var(--ui_blue);
  font-size: 16px;
  margin: 5px 0;
  border-radius: 5px;
  text-align: center;
}

.middle {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-template-rows: 70vh;
  align-items: center;
}

.middle img {
  width: 220px;
  box-shadow: 0 0px 15px #aaa;
  border-radius: 10px;
}

.middle .containerad {
  display: flex;
  align-items: center;
}

button,
input {
  outline: none;
}

input[type="number"] {
  width: 2rem;
}

input[type="number"],
input[type="checkbox"],
label {
  cursor: pointer;
}

button {
  width: 100%;
  cursor: pointer;
  margin: 10px 0;
  background-color: var(--ui_light);
  color: var(--ui_blue);
  padding: 10px;
  font-size: 1em;
  border-radius: 5em;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 0.3s;
  font-weight: 600;
  border: none;
}

button:hover {
  transform: translateY(-3px);
}

.light .buckets input {
  border: 1px solid var(--dark-bg);
  color: var(--dark-bg);
}
/* Large devices (laptops/desktops) */
@media only screen and (max-width: 992px) {
  .middle img {
  width: 200px;
} 
}
</style>