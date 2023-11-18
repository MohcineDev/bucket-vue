<template>
  <h1>Get Domains</h1>
  <section class="">
    <input type="text" v-model="tld" placeholder="enter TLD" id="" />
    <div class="wrapper">
      <textarea
        name=""
        id=""
        cols="30"
        v-model="srcTextarea"
        rows="10"
      ></textarea>
      <textarea
        name=""
        id=""
        cols="30"
        v-model="distTextarea"
        rows="10"
      ></textarea>
      <button @click="extractDomains">Get</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const tld = ref('me')
const srcTextarea = ref(`da
d
az
d
az
da.me
da
dm
ad.x.ME
daz
dazd
az.me`);
const distTextarea = ref("");


function extractDomains() {
    const pattern = new RegExp("\."+tld.value+"$")
//    const pattern = /\.me$/;
  let values = "";
  if (!srcTextarea.value.trim()) {
    return;
  }
  srcTextarea.value.split("\n").forEach((line) => {
    if (line.match(pattern)) {
      console.log(line.match(pattern));
      values += line.match(pattern).input + "\n";
    }
  });
  console.log(values);
  distTextarea.value = values;
}
</script>


<style scoped>
section {
  width: 90%;
  max-width: 1200px;
  margin: auto;
}
.wrapper{

}
</style>