<template>
  <h1>Get Domains</h1>
  <section class="">
    <input type="text" v-model="tld" title="enter tld the value after the . ex: me uk com" placeholder="enter TLD" class="tld" />
    <div class="wrapper">
      <textarea name="" id="srcTextarea" cols="30" v-model="srcTextarea" rows="10"></textarea>
      <span class="src">{{ srcCount }}</span>
      <textarea name="" id="distTextarea" cols="30" @focus="e => e.target.select()" readonly v-model="distTextarea"
        rows="10"></textarea>
      <span class="dist">{{ distCount }}</span>

      <button @click="extractDomains">Get</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const tld = ref('com')
const srcTextarea = ref('');

/*da
d
az
qsd da.me
dme
azm
da.me1636	lauriegordon1984@gmail.com
1635	osenjabed@gmail.com
1637	thangkhanga478@gmail.com
1638	lauriemurray1919@gmail.com
1639	osipova.el2014@gmail.com
1640	thanhhang2881@gmail.com
1649	nguyenhuuluan1123@gmail.com
1651	peggylowejput@gmail.com
1681	phamngocnhi930@gmail.com
1682	minhthong081088@gmail.com
da
dm
ad.x.ME
dazme
dazdm
az.me */
const distTextarea = ref("");
const srcCount = ref(0)
const distCount = ref(0)

function extractDomains() {
  if (tld.value[0] === '.') {
    tld.value = tld.value.replace('.', '')
  }

  const pattern = new RegExp("\\." + tld.value + "$")
  //    const pattern = /\.me$/;
  let values = "";

  ///if input is empty
  if (!srcTextarea.value.trim()) {
    srcTextarea.value = ''
    distTextarea.value = ''
    distCount.value = ''
    srcCount.value = ''

    return;
  }
  srcTextarea.value.split("\n").forEach((line) => {
    if (line.match(pattern)) {
      let domain = line.match(pattern).input.replace('\t', ' ') + "\n"
       
      values += domain.substring(domain.lastIndexOf(' ') + 1);
      // values += line.match(pattern).input + "\n"; 
    }
  });
  distTextarea.value = values;
  srcCount.value = srcTextarea.value.split('\n').length
  distCount.value = distTextarea.value.trim().split('\n').length
}
</script>


<style scoped>
* {
  --domains-shadow: 0 0 5px #89CFF3;
}

section {
  width: 90%;
  max-width: 1200px;
  margin: auto;
}

.wrapper {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

input.tld {
  width: 100px;
  margin: auto;
  display: block;
  border: none;
  box-shadow: var(--domains-shadow);
  text-align: center;
  font-size: 18px;
  border-radius: 5px;
}

textarea {
  resize: none;
  width: 200px;
  height: 60vh;
  margin: 1rem;
  border: 1px solid #aaa;
  outline: none;
  border-radius: 5px;
  box-shadow: var(--domains-shadow);

}

span {
  position: absolute;
  width: 20px;
  height: 18px;
  top: 80px;
  color: #fff;
  text-align: center;
  font-size: 14px;
  border-radius: 3px;
  z-index: -1;
}

span.src {
  background-color: rgb(114 173 127);
  left: calc(50% - 20px - 200px - 1rem - 4px);
}

span.dist {
  left: calc(50% + 200px + 1rem + 4px);
  background-color: #9d4949;
}

#srcTextarea {
  justify-self: end;
}

#distTextarea {
  justify-self: start;
  cursor: not-allowed;
}

button {
  position: absolute;
  left: 50%;
  bottom: -2.5rem;
  transform: translateX(-50%);
  padding: 1rem 3rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  box-shadow: var(--domains-shadow);
  cursor: pointer;
  color: var(--ui_blue);
  background-color: #fff;
  width: calc(206px * 2 + 2rem);
  transition: bottom 0.5s;
}

button:hover {
  bottom: -40px;
}
</style>