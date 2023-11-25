<template>
  <div>
    <textarea :id="ID" :value="myValue" :placeholder="placeHolder" @input="e=> $emit('handleChange', e)"></textarea>
  </div>
</template>

<script setup>
defineProps(["placeHolder", "ID", "myValue"]);
</script>

<style scoped>

 textarea {
  width: 300px;
  height: 200px;
}

</style>