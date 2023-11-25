<template>
  <h1>Verificationnnnnnnnnn</h1>
  <!-- testing component -->
  <div class="container">
    testing component

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
  <section class="verified">
    <label for="verified">
      <input type="checkbox" name="" id="verified" /> verified</label
    >
    <div class="container2">
      <FilterTextarea
        placeHolder="allprofiles"
        ID="src"
        :myValue="nbrs1"
        @handleChange="(e) => (nbrs1 = e.target.value)"
      />
      <div>
        <textarea
          id="result"
          :value="nbrs2"
          @input="(e) => (nbrs2 = e.target.value)"
          placeholder="to subtract"
        ></textarea>
      </div>
      <div>
        <textarea
          id="result"
          :value="nbrs3"
          @input="(e) => (nbrs3 = e.target.value)"
          @focus="(e) => e.target.select()"
          placeholder="result"
          readonly="true"
        ></textarea>
      </div>
    </div>

    <button @click="removeDuplicatedProfiles">Submit</button>
  </section>
</template>

<script setup>
import { ref } from "vue";
import FirstTextarea from "../components/FirstTextarea.vue";
import FilterTextarea from "../components/FilterTextarea.vue";
//@focus="(e) => (e.target.select(),  window.navigator.clipboard.writeText =  e.target.value)"
// const props = defineProps(["myContent", "ID", "placeHolder"]);

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

//get profile number from a row
function getProfileNum(row) {
  let profileNbr;
  if (row[0] === '"' && row.length >= 30) {
    let firstCommaIndex = row.indexOf(",");
    let secondDoublecout = row.indexOf('"', 5);

    profileNbr = row.substring(firstCommaIndex + 1, secondDoublecout);
  } else return;

  return profileNbr;
}

const nbrs1 = ref(`boite-not-work,14
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
boite-not-work,26`);
const nbrs2 = ref("");
const nbrs3 = ref("");

function removeDuplicatedProfiles() {
  let nbrs1Profiles = nbrs1.value.split("\n");
  let nbrs2Profiles = nbrs2.value.split("\n");
  let profiles1 = [];

  nbrs1Profiles.forEach((item) => profiles1.push(getProfileNum(item)));

  let nonDuplicatedValues = "";
  profiles1.forEach((item, index) =>
    nbrs2Profiles.includes(item)
      ? (nonDuplicatedValues += nbrs1Profiles[index] + "\n")
      : null
  );
  console.log(nonDuplicatedValues);

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