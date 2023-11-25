<template>
  <div>
    <textarea
      @input="(e) => $emit('handleChange', e)"
      :id="ID"
      :value="myContent"
      :placeholder="placeHolder"
      @focus="(e) => $emit('handleFocus', e)"
      :style="{ color: color, cursor }"
    ></textarea>
    <span>{{ spanCount }}</span>
  </div>
</template>


<script setup>
const props = defineProps([
  "myContent",
  "ID",
  "placeHolder",
  "spanCount",
  "color",
  "cursor",
]);
</script>
 
<style scoped>
textarea {
  height: 500px;
  width: 500px;
  font-family: arial;
  resize: none;
  border-radius: 8px;
  border: none;
  background-color: #fefefe;
  padding: 5px;
  box-shadow: 0 0 2px #aaa;
  transition: box-shadow 0.3s;
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

textarea:hover {
  box-shadow: 0 0 8px #aaa;
}

@media screen and (max-width: 1200px) {
  textarea {
    width: 400px;
  }
}
</style>