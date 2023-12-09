<template >
  <nav>
    <router-link to="/" class="logo">
      <svg stroke="currentColor" fill="#198fe7" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M231.5,162.63a12,12,0,0,0-15,0C214,164.64,192,183,192,208a32,32,0,0,0,64,0C256,183,234,164.64,231.5,162.63ZM224,216a8,8,0,0,1-8-8c0-6.8,3.91-13.64,8-18.83,4.07,5.17,8,12,8,18.83A8,8,0,0,1,224,216Zm8.49-101L125,7.51a12,12,0,0,0-17,0L70.25,45.29,48.48,23.51a12,12,0,1,0-17,17L53.28,62.26,12.2,103.34a28,28,0,0,0,0,39.6L97.06,227.8a28,28,0,0,0,39.6,0L232.49,132A12,12,0,0,0,232.49,115Zm-112.8,95.83a4,4,0,0,1-5.66,0L29.17,126a4,4,0,0,1,0-5.66L70.25,79.23l21.27,21.26a36,36,0,1,0,17-17L87.23,62.26,116.52,33,207,123.48ZM124,104a12,12,0,1,1-12,12A12,12,0,0,1,124,104Z">
        </path>
      </svg>
    </router-link>
    <div class="links">
      <router-link to="/IPs">IPS</router-link>
      <router-link to="/HTML">HTML</router-link>
      <div class="ext_container">
        <span>Extensions</span>
        <div class="extensions">
          <a href="">Pause</a>
          <a href="">Delete</a>
          <a href="">Resume</a>
          <a href="">Repo</a>
          <a href="">Get IPs</a>
          <a href="">Get&nbsp;Domains</a>
        </div>
      </div>
      <router-link to="verification">Verification</router-link>
      <router-link to="clix">Clix</router-link>
      <router-link to="domains">Domains</router-link>
      <div class="theme"  >

        <svg @click="addClass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="#198fe7" class="w-6 h-6 sun">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
        <svg @click="addClass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="#198fe7" class="w-6 h-6 moon">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>

      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

let notHasSchemaDark = false

let a = ref(document)
 

function addClass() {
  document.querySelector('body').classList.toggle("dark")
}

function checkIfHasSchema(){

  window.matchMedia  && window.matchMedia('(prefers-color-scheme: dark)').matches ? 
  hasSchemaDark = true : console.log('0000')

}
//checkIfHasSchema()

</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 90%;
  align-items: center;
  box-shadow: 0 0 5px #aaa;
  border-radius: 9px;
  padding: 2px 1rem;
  position: sticky;
  top: 15px;
  background: rgba(255, 255, 255, 1);
  background: #fefefe;
  z-index: 20;
}

.logo {
  display: flex;
}

.logo svg {
  width: 35px;
  height: 35px;
}

.links {
  display: flex;
  align-self: center;
}

.links>a,
.links>.ext_container {
  margin-left: 10px;
  padding: 10px;
  color: rgb(62, 153, 244);
}

.links>div {
  position: relative;
}

.extensions {
  position: absolute;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 0 5px #aaa;
  border-radius: 7px;
  left: 0;
  top: 160%;
  opacity: 0;
  visibility: hidden;
  transition: top 1s, opacity 0.5s;
}

.extensions a {
  padding: 5px;

}

.extensions a:hover {
  background-color: #eee;
}

.links>.ext_container:hover .extensions {
  top: 100%;
  opacity: 1;
  visibility: visible;
}

.theme {
  display: flex;
  align-items: center;
  border-left: 2px solid var(--ui_blue);
  padding-left: 10px;
  margin-left: 10px;
}

.theme svg {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.theme .sun {
  display: none;
}

.dark .theme .moon {
  display: none;
}

.dark .theme .sun {
  display: block;
}</style>
