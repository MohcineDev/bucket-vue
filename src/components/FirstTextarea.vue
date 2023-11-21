<template>
  <div>

    <textarea  @input="e => $emit('handleChange', e)" :id="ID"  :value="myContent"
    :placeholder="placeHolder" @focus="e=> $emit('handleFocus',e)" 
    :style='{color:color}'
    ></textarea>
    <span>---- {{ spanCount }}</span>

  </div>
</template>


<script setup>  
const props = defineProps(['myContent', 'ID', 'placeHolder', 'spanCount', 'color']) 
</script>
 
<style scoped>

</style>