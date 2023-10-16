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
        placeholder="target ips"
        cols="30"
        rows="10"
      ></textarea>
      <span></span>
    </div>
    <div class="controls">
      <div>
        <label for="splitInto">Into&nbsp;:&nbsp;</label>
        <input
          type="number"
          :value="splitInto"
          id="splitInto"
          min="2"
          max="5"
          @input="e=> splitInto = parseInt(e.target.value)"
        />
      </div>
      <button @click="splitIps" class="split">Split</button>
    </div>
    <div class="textareas"></div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const targetIps = ref();
const splitInto = ref(2);
console.log(targetIps);
const splitBtn = document.querySelector("button.split");
let textareas = "";

let list1Textarea = document.querySelector("#list1");
let list2Textarea = document.querySelector("#list2");
let list3Textarea = document.querySelector("#list3");
let list4Textarea = document.querySelector("#list4");
let list5Textarea = document.querySelector("#list5");

function targetIpsChange() {
  console.log(targetIps);
  document.querySelector(" #ips+span").textContent =
    targetIps.value.split("\n").length;
}

let validIps = [];
let list1 = "",
  list2 = "",
  list3 = "",
  list4 = "",
  list5 = "";

function splitIps() {
  textareas = document.querySelector(".textareas");
console.log(splitInto)
  const ips = targetIps.value;
  (list1 = ""), (list2 = ""), (list3 = ""), (list4 = ""), (list5 = "");
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

  ///create textarea element
  createTextArea(splitInto.value);

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
  document.querySelectorAll(".textareas span").forEach((elem) => {
    elem.textContent = elem.previousElementSibling.value.split("\n").length - 1;
  });
}

function createTextArea(nbr) {
  //remove child textareas
  textareas.querySelectorAll("textarea").length >= 1
    ? textareas
        .querySelectorAll("textarea")
        .forEach((elem) => textareas.removeChild(elem))
    : null;

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

  list1Textarea = document.querySelector("#list1");
  list2Textarea = document.querySelector("#list2");
  list3Textarea = document.querySelector("#list3");
  list4Textarea = document.querySelector("#list4");
  list5Textarea = document.querySelector("#list5");

  textareas
    .querySelectorAll("textarea")
    .forEach((txtArea) =>
      txtArea.addEventListener("click", (e) => e.target.select())
    );
}
//////---------------
function splitIntoFunc(splitNbr) {
  validIps.forEach((element, index) => {
    if (splitNbr === 2) {
      if (index % 2 == 0) {
        list1 += `${element}\n`;
      } else list2 += `${element}\n`;
    } else if (splitNbr === 3) {
      if (index % 3 == 0) {
        list1 += `${element}\n`;
      } else if (index % 2 == 0) {
        list2 += `${element}\n`;
      } else list3 += `${element}\n`;
    } else if (splitNbr === 4) {
      if (index % 4 == 0) {
        list1 += `${element}\n`;
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

  list1Textarea ? (list1Textarea.value = list1) : null;
  list2Textarea ? (list2Textarea.value = list2) : null;
  list3Textarea ? (list3Textarea.value = list3) : null;
  list4Textarea ? (list4Textarea.value = list4) : null;
  list5Textarea ? (list5Textarea.value = list5) : null;
}
//////---------------
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

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