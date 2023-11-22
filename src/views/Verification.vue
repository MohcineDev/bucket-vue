<template>
  <h1>Verificationnnnnnnnnn</h1>
  <!-- testing component -->
  <div class="container">
    testing component

    <div class="textareas">
      <div id="refresh" @click="emptyTextareas">Refresh</div>
      <FirstTextarea :myContent="textAreaSrc" color='gray' @handleChange="e => (textAreaSrc = e.target.value)" ID="src"
        @handleFocus="e => e.target.select()" placeHolder="past here / coller ici" :spanCount='spanSrcCount' />

      <FirstTextarea ID="result" placeHolder="result" readonly="true" :myContent="textAreaResult"
        :spanCount='spanResultCount' />
    </div>

    <button @click="generateProfiles">Submit</button>
  </div>




  <section>
    <div class="container2">
      <div class="textareas2">
        <div>
          <textarea id="src" :value="nbrs1" @input="(e) => (nbrs1 = e.target.value)" placeholder="allprofiles"></textarea>
        </div>
        <div>
          <textarea id="result" :value="nbrs2" @input="(e) => (nbrs2 = e.target.value)"
            placeholder="to subtract"></textarea>
        </div>
        <div>
          <textarea id="result" :value="nbrs3" @input="(e) => (nbrs3 = e.target.value)" @focus="(e) => e.target.select()"
            placeholder="result" readonly="true"></textarea>
        </div>
      </div>

      <button @click="removeDuplicatedProfiles">Submit</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import FirstTextarea from "../components/FirstTextarea.vue";
//@focus="(e) => (e.target.select(),  window.navigator.clipboard.writeText =  e.target.value)"
// const props = defineProps(["myContent", "ID", "placeHolder"]);
function doSomething(e) {
  console.log(e)

}
const textAreaSrc = ref("");
const textAreaResult = ref("");
const textAreaSrc12 = ref(`"boite-not-work,2","wpwang2005@gmail.com"
"boite-not-work,4","kubodennis@gmail.com"
boite-not-work,1
boite-not-work,3
boite-not-work,5
"boite-not-work,9","promresurs92@gmail.com"
boite-not-work,7
boite-not-work,8
"boite-not-work,6","hafazjamaluddin@gmail.com"
boite-not-work,10
boite-not-work,11
boite-not-work,14
"boite-not-work,18","mdsujnislam36662@gmail.com"
boite-not-work,13
boite-not-work,16
boite-not-work,15
"boite-not-work,21","mdsumon70998@gmail.com"
boite-not-work,19
boite-not-work,20
"boite-not-work,24","mdsumongazim@gmail.com"
"boite-not-work,23","md.sumon.biri.bd@gmail.com"
boite-not-work,17
boite-not-work,22
boite-not-work,25
boite-not-work,12
boite-not-work,26
boite-not-work,27
boite-not-work,28
boite-not-work,31
boite-not-work,30      
`);
const textAreaSrc1 = ref("");
const textAreaResult1 = ref("");
const spanSrcCount = ref();
const spanResultCount = ref();

function generateProfiles() {
  textAreaResult.value = "";

  let data = textAreaSrc.value.split("\n");

  data.forEach((row) => {

    if (!row.includes('#')) {
      if (row.length > 30) {
        let firstCommaIndex = row.indexOf(",");
        let profileNbr = row.substring(firstCommaIndex + 1, row.indexOf('"', 12));
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

function generateProfiles1() {
  textAreaResult1.value = "";

  let data = textAreaSrc1.value.split("\n");
  data.forEach((row, i) => {
    if (row[0] === '"' && row.length >= 30) {
      let firstCommaIndex = row.indexOf(",");
      let secondDoublecout = row.indexOf('"', 5);
      let profileNbr = row.substring(firstCommaIndex + 1, secondDoublecout);
      let emailAddress = row.substring(row.indexOf('","') + 3, row.length - 1);

      //     let line = `${profileNbr} \t ${emailAddress} \n`;
      let line = `${profileNbr}\n`;

      textAreaResult1.value += line;
    }
  });
}
const nbrs1 = ref("");
const nbrs2 = ref("");
const nbrs3 = ref("");

function removeDuplicatedProfiles() {
  let nbrs1Profiles = nbrs1.value.split("\n");
  let nbrs2Profiles = nbrs2.value.split("\n");
  let nonDuplicatedValues = "";
  nbrs1Profiles.filter((item) =>
    nbrs2Profiles.includes(item)
      ? (nonDuplicatedValues += item + "\n")
      : console.log(item + " ")
  );
  nbrs3.value = nonDuplicatedValues;
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

.textareas>div {
  position: relative;
}


.container2 textarea {
  width: 300px;
}

#result {
  cursor: not-allowed;
}

p {
  text-align: center;
  margin: 2rem;
  text-transform: capitalize;
  font-size: 1.2rem;
  font-weight: 700;
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
</style>