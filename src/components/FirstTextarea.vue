<template>
    <textarea  :id="ID" :value="myContent"
        :placeholder="placeHolder"></textarea>
        <h1>dvcqsq   </h1> 
</template>


<script setup>
defineProps(['myContent', 'ID', 'placeHolder']) 
</script>


<style scoped>

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
</style>