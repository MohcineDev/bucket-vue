<template >
  <nav>
    <router-link to="/" class="logo">
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 256 256"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M231.5,162.63a12,12,0,0,0-15,0C214,164.64,192,183,192,208a32,32,0,0,0,64,0C256,183,234,164.64,231.5,162.63ZM224,216a8,8,0,0,1-8-8c0-6.8,3.91-13.64,8-18.83,4.07,5.17,8,12,8,18.83A8,8,0,0,1,224,216Zm8.49-101L125,7.51a12,12,0,0,0-17,0L70.25,45.29,48.48,23.51a12,12,0,1,0-17,17L53.28,62.26,12.2,103.34a28,28,0,0,0,0,39.6L97.06,227.8a28,28,0,0,0,39.6,0L232.49,132A12,12,0,0,0,232.49,115Zm-112.8,95.83a4,4,0,0,1-5.66,0L29.17,126a4,4,0,0,1,0-5.66L70.25,79.23l21.27,21.26a36,36,0,1,0,17-17L87.23,62.26,116.52,33,207,123.48ZM124,104a12,12,0,1,1-12,12A12,12,0,0,1,124,104Z"
        ></path>
      </svg>
    </router-link>
    <div class="links">
          
      <router-link to="/IPs">IPS</router-link>
      <router-link to="/HTML">HTML</router-link>
    </div>
  </nav>
</template>

<script setup>
import { PiPaintBucketBold } from "react-icons/pi";
</script>

<style>
nav{
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
    width: 90%;
    align-items: center;
}
.logo svg{
    width: 35px;
    height: 35px;
}
.links a{
    margin-left: 10px;
    padding: 10px;
}
</style>