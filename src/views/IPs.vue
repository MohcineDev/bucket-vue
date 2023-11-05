<template>
  <h1>Split Ips</h1>
  <section class="wrapper ips">
    <div>
      <textarea
        name=""
        id="ips"
        :value="targetIps"
        @input="(e) => (targetIps = e.target.value)"
        @change="targetIpsChange"
        placeholder="target ips  / rows to split"
        cols="30"
        rows="10"
      ></textarea>
      <span></span>
    </div>
    <div class="controls">
      <div>
        <label for="splitInto">Into&nbsp;:&nbsp;</label>
        <input
          title="split into"
          type="number"
          :value="splitInto"
          id="splitInto"
          min="2"
          max="5"
          @input="(e) => (splitInto = parseInt(e.target.value))"
        />
      </div>
      <button @click="splitIps" class="split">Split</button>
    </div>
    <div class="textareas">
      <template v-for="(n, index) in textAreasCount" :key="index">
  {{ console.log(n) }}
  <textarea  :id="`list${n}`" :value="list[index].toString().replace(/,/g, '')"></textarea>
  
        <span></span>
      </template>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const textAreasCount = ref(0);
const targetIps = ref(`192.168.1.1
192.168.1.0
192.168.1.2
192.168.1.3
192.168.1.10
255.255.255.255
172.16.0.1`);
let list = ref([[],[],[],[],[]])

const splitInto = ref(2);
let textareas = "";
 

////update span value when target ips changes
function targetIpsChange() {
  console.log(targetIps);
  document.querySelector(" #ips+span").textContent =
    targetIps.value.split("\n").length;
}

let validIps = [];

function splitIps() {
  textareas = document.querySelector(".textareas");

  const ips = targetIps.value;
 
  validIps = [];

  if (!targetIps.value) {
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
  textAreasCount.value = splitInto.value;



  ///create textarea element
  //  createTextArea(splitInto.value);

  //remove empty lines
  ips.split("\n").forEach((item) => {
    if (item !== "") {
      validIps.push(item);
    }
  });

  if (parseInt(splitInto.value) === 2) {
    splitIntoFunc(2);
  }
  if (parseInt(splitInto.value) === 3) {
    splitIntoFunc(3);
  }
  if (parseInt(splitInto.value) === 4) {
    splitIntoFunc(4);
  }
  if (parseInt(splitInto.value) === 5) {
    splitIntoFunc(5);
  }
  /*
  document.querySelectorAll(".textareas span").forEach((elem) => {
    elem.textContent = elem.previousElementSibling.value.split("\n").length - 1;
  });*/
}

function createTextArea(nbr) {
  //remove child textareas
  textareas.querySelectorAll("textarea").length >= 1
    ? textareas
        .querySelectorAll("textarea")
        .forEach((elem) => textareas.removeChild(elem))
    : null;
  //remove span elements
  textareas.querySelectorAll(".textareas span").length >= 1
    ? textareas
        .querySelectorAll("span")
        .forEach((elem) => textareas.removeChild(elem))
    : null;

  for (let i = 0; i < nbr; i++) {
    let textArea = document.createElement("textarea");
    let span = document.createElement("span");
    textArea.id = `list${i + 1}`;

    textareas.appendChild(textArea);
    textareas.appendChild(span);
  }
}

//////---------------
function splitIntoFunc(splitNbr) {
  console.log('textAreasCount : ', textAreasCount.value)
  let list1=[]
let list2=[]
let list3=[]
let list4=[]
let list5=[]
  validIps.forEach((element, index) => {
    if (splitNbr === 2) {
      if (index % 2 == 0) 
      {
        list1.push(element+"\n");
      } 
      else list2.push(element+"\n");
    } 
    else if (splitNbr === 3) {
      if (index % 3 == 0) {
        list1.push(element+"\n");

      } 
      else if (index % 2 == 0) {
        list2.push(element+"\n");
      } 
      else list3.push(element+"\n");
    } 
    else if (splitNbr === 4) {
      if (index % 4 == 0) {
        list1.push(element+"\n");
      } else if (index % 3 == 0) {
        list2 += `${element}\n`;
      } else if (index % 2 == 0) {
        list3 += `${element}\n`;
      } else list4 += `${element}\n`;
    } else if (splitNbr === 5) {
      if (index % 5 == 0) {
        list1 += `${element}\n`;
      } else if (index % 4 == 0) {
        list2 += `${element}\n`;
      } else if (index % 3 == 0) {
        list3 += `${element}\n`;
      } else if (index % 2 == 0) {
        list4 += `${element}\n`;
      } else list5 += `${element}\n`;
    }
  });
 
  list.value = [list1, list2,list1, list2, list1]
}
//////---------------
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

h1 {
  text-align: center;
  font-family: "Permanent Marker", cursive;
  color: var(--ui_blue);
  font-size: 2rem;
  margin: 2rem;
}

.container .txt_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
}

.txt_wrapper > textarea,
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

* {
  font-family: arial;
  --dark: #101020;
}
body {
  margin: 0;
  color: #101020;
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