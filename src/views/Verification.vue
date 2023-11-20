<template>
  <h1>Verificationnnnnnnnnn</h1>
  <div class="container">
    <div class="textareas">
      <div id="refresh" @click="emptyTextareas">Refresh</div>

      <div>
        <textarea id="src" :value="textAreaSrc" @input="(e) => (textAreaSrc = e.target.value)"
          placeholder="past here / coller ici"></textarea>
        <span>{{ spanSrcCount }}</span>
      </div>
      <div>
        <textarea id="result" :value="textAreaResult" @input="(e) => (textAreaResult = e.target.value)"
          @focus="(e) => e.target.select()" placeholder="result" readonly="true"></textarea>
        <span>{{ spanResultCount }}</span>
      </div>
    </div>

    <button @click="generateProfiles">Submit</button>
  </div>

  <div class="container1">
    <p>get restricted profiles </p>
    <div class="textareas2">

      <div>
        <textarea id="src" :value="textAreaSrc1" @input="(e) => (textAreaSrc1 = e.target.value)"
          placeholder="past here / coller ici"></textarea>
      </div>
      <div>
        <textarea id="result" :value="textAreaResult1" @input="(e) => (textAreaResult1 = e.target.value)"
          @focus="(e) => e.target.select()" placeholder="result" readonly="true"></textarea>
      </div>
    </div>

    <button @click="generateProfiles1">Submit</button>
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
//@focus="(e) => (e.target.select(),  window.navigator.clipboard.writeText =  e.target.value)"

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
boite-not-work,33
boite-not-work,35
boite-not-work,32
boite-not-work,34
boite-not-work,37
boite-not-work,38
"boite-not-work,42","mokleskhan732@gmail.com"
boite-not-work,39
boite-not-work,29
boite-not-work,40
boite-not-work,41
"boite-not-work,46","mokterhossain841@gmail.com"
"boite-not-work,36","mdtanbir524@gmail.com"
boite-not-work,43
"boite-not-work,47","mokterhossen24@gmail.com"
boite-not-work,44
boite-not-work,45
boite-not-work,48
boite-not-work,50
boite-not-work,51
"boite-not-work,55","molygaine22@gmail.com"
boite-not-work,49
boite-not-work,52
boite-not-work,53
boite-not-work,54
boite-not-work,56
boite-not-work,57
boite-not-work,58
"boite-not-work,64","monebulmonebul879@gmail.com"
boite-not-work,60
boite-not-work,61
boite-not-work,62
boite-not-work,65
boite-not-work,66
boite-not-work,67
boite-not-work,68
boite-not-work,69
boite-not-work,70
boite-not-work,71
boite-not-work,74
boite-not-work,72
boite-not-work,76
boite-not-work,75
"boite-not-work,63","monayamkhan1994@gmail.com"
boite-not-work,77
boite-not-work,78
boite-not-work,79
boite-not-work,80
boite-not-work,81
boite-not-work,83
boite-not-work,84
"boite-not-work,88","nannu17765@gmail.com"
boite-not-work,86
boite-not-work,87
boite-not-work,89
boite-not-work,90
"boite-not-work,93","narodgope@gmail.com"
boite-not-work,82
boite-not-work,59
boite-not-work,91
boite-not-work,92
"boite-not-work,96","nasimakhatun0178750@gmail.com"
boite-not-work,94
boite-not-work,95
boite-not-work,97
boite-not-work,98
boite-not-work,99
boite-not-work,100
boite-not-work,101
boite-not-work,102
"boite-not-work,104","mdrafiqulislamctg2019@gmail.com"
boite-not-work,103
"boite-not-work,106","nathan.gilmore98@gmail.com"
"boite-not-work,108","nawaraparvin395@gmail.com"
"boite-not-work,110","nazimgazibd@gmail.com"
boite-not-work,107
boite-not-work,109
boite-not-work,111
boite-not-work,113
boite-not-work,114
boite-not-work,115
boite-not-work,85
boite-not-work,112
"boite-not-work,119","nazmulislam37199@gmail.com"
boite-not-work,116
boite-not-work,117
boite-not-work,118
boite-not-work,120
boite-not-work,121
boite-not-work,105
boite-not-work,73
"boite-not-work,125","panjusarker@gmail.com"
boite-not-work,122
boite-not-work,123
boite-not-work,126
boite-not-work,128
boite-not-work,129
"boite-not-work,133","parbin2280@gmail.com"
boite-not-work,130
boite-not-work,131
boite-not-work,132
boite-not-work,124
boite-not-work,134
boite-not-work,135
boite-not-work,136
boite-not-work,127
boite-not-work,137
boite-not-work,138
boite-not-work,139
boite-not-work,140
boite-not-work,142
boite-not-work,144
boite-not-work,146
boite-not-work,147
boite-not-work,148
boite-not-work,149
"boite-not-work,153","phamthithanhthuy108@gmail.com"
"boite-not-work,154","phamthituyetmai36@gmail.com"
"boite-not-work,145","phamhoanghai1974@gmail.com"
boite-not-work,151
boite-not-work,152
boite-not-work,141
boite-not-work,155
"boite-not-work,143","p.danieljrochon@gmail.com"
"boite-not-work,159","philip01734427796@gmail.com"
boite-not-work,156
"boite-not-work,160","phucnguyen21022002@gmail.com"
boite-not-work,157
boite-not-work,158
"boite-not-work,163","raselkhan5329@gmail.com"
boite-not-work,161
boite-not-work,162
boite-not-work,164
"boite-not-work,168","raselshekh46140@gmail.com"
"boite-not-work,169","raselzresel@gmail.com"
boite-not-work,167
boite-not-work,170
boite-not-work,171
boite-not-work,172
boite-not-work,173
boite-not-work,174
boite-not-work,175
"boite-not-work,178","rashidmamun3080@gmail.com"
"boite-not-work,165","raselneyamot@gmail.com"
boite-not-work,176
"boite-not-work,180","rasidulaisalama617@gmail.com"
"boite-not-work,177","rashid1959017@gmail.com"
"boite-not-work,183","rasumirza2000@gmail.com"
boite-not-work,181
boite-not-work,182
"boite-not-work,150","phamthicamly1985@gmail.com"
boite-not-work,184
"boite-not-work,189","rawshanjahanat@gmail.com"
"boite-not-work,190","rayhanlikhonpabna@gmail.com"
boite-not-work,187
boite-not-work,188
boite-not-work,186
"boite-not-work,194","mehedihasan5555555@gmail.com"
boite-not-work,191
boite-not-work,192
boite-not-work,193
"boite-not-work,197","razukarim33@gmail.com"
boite-not-work,179
"boite-not-work,198","razzak357452@gmail.com"
boite-not-work,195
boite-not-work,196
boite-not-work,201
boite-not-work,202
boite-not-work,203
boite-not-work,199
boite-not-work,204
boite-not-work,205
boite-not-work,206
boite-not-work,207
boite-not-work,208
"boite-not-work,214","runaaktar570@gmail.com"
boite-not-work,210
boite-not-work,212
boite-not-work,213
boite-not-work,200
boite-not-work,215
"boite-not-work,223","sa0554406@gmail.com"
boite-not-work,217
"boite-not-work,225","sa6197726@gmail.com"
boite-not-work,216
"boite-not-work,229","sabbir021919@gmail.com"
"boite-not-work,230","sabbirahmed1091@gmail.com"
boite-not-work,226
boite-not-work,209
boite-not-work,166
boite-not-work,185
boite-not-work,232
boite-not-work,233
boite-not-work,234
"boite-not-work,238","sabinasajj@gmail.com"
boite-not-work,235
boite-not-work,236
boite-not-work,220
"boite-not-work,241","selimhosen1122@gmail.com"
boite-not-work,240
"boite-not-work,245","selimww101@gmail.com"
boite-not-work,242
boite-not-work,243
boite-not-work,244
boite-not-work,239
"boite-not-work,247","sentumridha17257@gmail.com"
boite-not-work,246
"boite-not-work,237","sabinasabina47511@gmail.com"
boite-not-work,248
boite-not-work,249
boite-not-work,250
boite-not-work,231
boite-not-work,251
boite-not-work,252
"boite-not-work,256","sgangaroy@gmail.com"
boite-not-work,253
boite-not-work,254
boite-not-work,257
boite-not-work,224
`);
const textAreaSrc1 = ref('')
const textAreaResult1 = ref("");
const spanSrcCount = ref();
const spanResultCount = ref();

function generateProfiles() {
  textAreaResult.value = "";

  let data = textAreaSrc.value.split("\n");

  data.forEach((row) => {
    if (row.length > 30) {
      let firstCommaIndex = row.indexOf(',')
      let profileNbr = row.substring(firstCommaIndex+1, row.indexOf('"', 12));
      let emailAddress = row.substring(
        row.indexOf('","') + 3,
        row.indexOf('"', 30)
      );

      let line = `${profileNbr} \t ${emailAddress} \n`;

      textAreaResult.value += line;
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
      let firstCommaIndex = row.indexOf(',')
      let secondDoublecout = row.indexOf('"', 5)
      let profileNbr = row.substring(firstCommaIndex + 1, secondDoublecout)
      let emailAddress = row.substring( row.indexOf('","') + 3 , row.length-1 );
 

 //     let line = `${profileNbr} \t ${emailAddress} \n`;
      let line = `${profileNbr}\n`;
      

      textAreaResult1.value += line;
    }
  });
}
const nbrs1 = ref('')
const nbrs2 = ref('')
const nbrs3 = ref('')

function removeDuplicatedProfiles() { 

  let nbrs1Profiles = nbrs1.value.split('\n')
  let nbrs2Profiles = nbrs2.value.split('\n')
let nonDuplicatedValues = ''
  nbrs1Profiles.filter(item => nbrs2Profiles.includes(item) ?nonDuplicatedValues+= item+'\n' :  console.log(item+' '))
  nbrs3.value = nonDuplicatedValues
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

.container2 textarea {
  width: 300px;
}

textarea:hover {
  box-shadow: 0 0 8px #aaa;
}

#result {
  cursor: not-allowed;
}
p{
  text-align: center;
  margin: 2rem ;
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

span {
  position: absolute;
  bottom: -15px;
  left: 15px;
  font-size: 12px;
  color: #fff;
  padding: 0 5px;
}

#src+span {
  background-color: #af4343;
}

#result+span {
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
</style>