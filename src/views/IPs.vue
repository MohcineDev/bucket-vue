<template>
  <h1>Split IpSssssss</h1>
  <section class="wrapper ips">
    <div>
      <textarea name="" id="ips" :value="targetIps" @input="(e) => (targetIps = e.target.value)" @change="targetIpsChange"
        placeholder="target ips | rows to split | rows to count" cols="30" rows="10"></textarea>
      <span>{{ targetIps.split('\n').length }}</span>
    </div>
    <div class="controls">
      <div>
        <label for="splitInto">Into&nbsp;:&nbsp;</label>
        <input title="split into" type="number" :value="splitInto" id="splitInto" min="2" max="5"
          @input="(e) => (splitInto = parseInt(e.target.value))" />
      </div>
      <button @click="splitIps" class="split">Split</button>
    </div>
    <div class="textareas">
      <template v-for="(n, index) in textAreasCount" :key="index">
        <textarea :id="`list${n}`" :value="list[index].toString().replace(/,/g, '')" readonly
          @focus="e => e.target.select()"></textarea>
        <span>{{ list[index].length }}</span>
      </template>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const textAreasCount = ref(0);
const targetIps = ref(``);
let list = ref([[], [], [], [], []])

const splitInto = ref(2);

////update span value when target ips changes
function targetIpsChange() {

  document.querySelector(" #ips+span").textContent =
    targetIps.value.split("\n").length;
}

let validIps = [];

function splitIps() {
  const ips = targetIps.value;

  validIps = [];

  if (!ips.trim()) {
    alert("enter your ips!!");
    return;
  }

  //set the default values min =2, max =5
  splitInto.value > 5
    ? (splitInto.value = 5)
    : (splitInto.value = splitInto.value);
  splitInto.value < 2
    ? (splitInto.value = 2)
    : (splitInto.value = splitInto.value);

  ///place it here to make sure splitInto is between 2 & 5
  ///how many text areas to create 0 --> 5


  //remove empty lines
  ips.split("\n").forEach((item) => {
    if (item !== "") {
      validIps.push(item);
    }
  });

  textAreasCount.value = validIps.length < 5 ? (validIps.length, splitInto.value = validIps.length) : splitInto.value;

  newSplitIps()
}

function newSplitIps() {
  list.value = [[], [], [], [], []]

  let listNum = 0
  validIps.forEach(ip => {
    list.value[listNum].push(`${ip}\n`)
    listNum + 1 === splitInto.value ? listNum = 0 : listNum++
  })
}

/*
25ip  ////  4
< targetips.length

let listNum = 1
i=0   list i + 1  == target[i]  
i=1   list i + 1    target [i]
i=4  list i + 1  === target(i)
listNum++

if listNum = spiltvalue ? listNum = 1
*/
</script>

<style scoped>
.wrapper {
  width: 90%;
  max-width: 1200px;
  margin: auto;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 2rem auto 0;
}


.container .txt_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
}

.txt_wrapper>textarea,
.txt_wrapper div {
  width: 48%;
}

textarea {
  height: 200px;
  resize: none;
  border-radius: 5px;
  border: 1px solid transparent;
  outline: none;
  box-shadow: 0 0 5px #aaa;
  padding: 5px;
  transition: border 0.3s;
  background-color: #fefefe;
}

textarea::placeholder {
  text-transform: capitalize;
}

textarea:hover {
  border-color: #aaa;
}

.txt_wrapper div textarea {
  width: 100%;
}

.txt_wrapper div {
  position: relative;
}

.txt_wrapper div span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-transform: capitalize;
  background-color: crimson;
  padding: 5px;
  color: #fff;
  border-radius: 5px;
  display: none;
}

div span.displayError {
  display: block;
}

.btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btns button {
  padding: 1rem 0;
  font-size: 1rem;
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin: 15px 0;
  width: 32%;
  border: 1px solid transparent;
  position: relative;
  box-shadow: 0 0 5px #aaa;
  transition: box-shadow 0.3s;
}

.btns button:hover {
  box-shadow: 0 0 5px #888;
}

.btns button::before {
  content: "";
  width: 20px;
  height: 20px;
  background: #646e9f;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  color: #fff;
}

.btns button:nth-child(1)::before {
  content: "3";
}

.btns button:nth-child(2)::before {
  content: "1";
}

.btns button:nth-child(3)::before {
  content: "2";
}

.Spam_Keywords p {
  background: #f9a3a3;
  padding: 15px;
  color: #232346;
  border-radius: 5px;
  text-align: center;
  font-weight: 600;
  display: none;
}

.Spam_Keywords p.visible {
  display: block;
}

.Spam_Keywords span {
  padding: 5px;
  background-color: #eee;
  border-radius: 5px;
  margin: 0 5px;
}

.ips {
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(3, 200px);
  align-items: center;
  justify-content: space-around;
}

.textareas textarea {
  margin: 1rem;
}

.textareas span,
#ips span {
  font-size: 11px;
  margin: -16px 0 0 1rem;
  display: block;
}

.controls {
  margin: 1rem 0;
  justify-content: center;
}

.controls div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.controls div input {
  width: 70%;
  border: 1px solid #000;
  border-radius: 5px;
  text-align: center;
  outline: none;
}

button.split {
  width: 100%;
  padding: 5px 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
}
</style>