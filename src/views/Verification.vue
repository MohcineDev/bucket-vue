<template>
  <h1>Verificationnnnnnnnnn</h1>
  <div class="container">
    <div class="textareas">
      <div id="refresh" @click="emptyTextareas">Refresh</div>

      <div>
        <textarea
          id="src"
          :value="textAreaSrc"
          @input="(e) => (textAreaSrc = e.target.value)"
          placeholder="past here / coller ici"
        ></textarea>
        <span>{{ spanSrcCount }}</span>
      </div>
      <div>
        <textarea
          id="result"
          :value="textAreaResult"
          @input="(e) => (textAreaResult = e.target.value)"
          @focus="(e) => e.target.select()"
          placeholder="result"
          readonly="true"
        ></textarea>
        <span>{{ spanResultCount }}</span>
      </div>
    </div>

    <button @click="generateProfiles">Submit</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
//@focus="(e) => (e.target.select(),  window.navigator.clipboard.writeText =  e.target.value)"

const textAreaSrc = ref("");
const textAreaResult = ref("");
const spanSrcCount = ref();
const spanResultCount = ref();

function generateProfiles() {
  textAreaResult.value = "";

  let data = textAreaSrc.value.split("\n");

  data.forEach((row) => {
    if (row.length > 40) {
      let profileNbr = row.substring(11, row.indexOf('"', 12));
      let emailAddress = row.substring(
        row.indexOf('","') + 3,
        row.indexOf('"', 20)
      ); 

      let line = `${profileNbr} \t ${emailAddress} \n`;

      textAreaResult.value += line;
    }
  }); 
  spanSrcCount.value = data.length-1;
  spanResultCount.value = textAreaResult.value.split("\n").length-1;
}

///empty the content of textareas and span elements
function emptyTextareas() {
  textAreaSrc.value = "";
  textAreaResult.value = "";
  spanSrcCount.value = "";
  spanResultCount.value = "";
}
</script>

<style scoped>

.container {
  width: 90%;
  margin: auto;
}
.textareas {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.textareas > div {
  position: relative;
}
textarea {
  height: 500px;
  width: 500px;
  font-family: arial;
  resize: none;
  border-radius: 8px;
  border: none;
  box-shadow: 0 0 8px #ccc;
  background-color: #fefefe;
  outline: none;
  padding: 5px;
}
textarea:hover {
  box-shadow: 0 0 8px #aaa;
}

#result{
  cursor: not-allowed;
}
button {
  margin: 1rem auto;
  display: flex;
  padding: 15px 3rem;
  border: none;
  color: #fff;
  background-color: #0077ff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 2s;
}

button:hover {
  background: #74b0f5;
}

span {
  position: absolute;
  bottom: -15px;
  left: 15px;
  font-size: 12px;
  color: #fff;
  padding: 0 5px;
}

#src + span {
  background-color: #af4343;
}
#result + span {
  background-color: #33c138;
}

#refresh {
  width: 50%;
  height: 50%;
  position: absolute;
  cursor: pointer;
  left: 50%;
  transform: translateX(-50%);
}

@media screen and (max-width: 1200px) {
  textarea {
    height: 500px;
    width: 350px;
  }
}
@media screen and (max-width: 992px) {
  textarea {
    height: 400px;
    width: 250px;
  }
}
</style>