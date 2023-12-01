<template>
  <h1>Verificationnnnnnnnnn</h1> 
  <div class="container"> 

    <div class="textareas">
      <div id="refresh" @click="emptyTextareas">Refresh</div>
      <FirstTextarea
        :myContent="textAreaSrc" color="gray" ID="src"
        @handleChange="(e) => (textAreaSrc = e.target.value)"
        placeHolder="past here / coller ici"
        :spanCount="spanSrcCount"
      />

      <FirstTextarea
        ID="result"
        placeHolder="result"
        readonly="true"
        :myContent="textAreaResult"
        :spanCount="spanResultCount"
        @handleFocus="(e) => e.target.select()"
        cursor="not-allowed"
      />
    </div>

    <button @click="generateProfiles">Submit</button>
  </div>
  
</template>

<script setup>
import { ref } from "vue";
import FirstTextarea from "../components/FirstTextarea.vue"; 


const textAreaSrc = ref("");
const textAreaResult = ref("") 
const spanSrcCount = ref();
const spanResultCount = ref();

function generateProfiles() {
  textAreaResult.value = "";

  let data = textAreaSrc.value.split("\n");

  data.forEach((row) => {
    if (!row.includes("#")) {
      if (row.length > 30) {
        let firstCommaIndex = row.indexOf(",");
        let profileNbr = row.substring(
          firstCommaIndex + 1,
          row.indexOf('"', 12)
        );
        let emailAddress = row.substring(
          row.indexOf('","') + 3,
          row.indexOf('"', 30)
        );

        let line = `${profileNbr} \t ${emailAddress} \n`;

        textAreaResult.value += line;
      }
    }
  });
  spanSrcCount.value = data.length - 1;
  spanResultCount.value = textAreaResult.value.split("\n").length - 1;
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

.textareas,
.textareas2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.textareas > div {
  position: relative;
}

.container2 textarea {
  width: 300px;
  height: 200px;
}

p {
  text-align: center;
  margin: 2rem;
  text-transform: capitalize;
  font-size: 1.2rem;
  font-weight: 700;
}

button {
  margin: 1.5rem auto;
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

#refresh {
  width: 50%;
  height: 50%;
  position: absolute;
  cursor: pointer;
  left: 50%;
  transform: translateX(-50%);
}

.verified .container2 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
}

@media screen and (max-width: 1200px) {
  textarea {
    height: 500px;
    width: 350px;
  }
}
</style>