<template>
    <input type="radio" :value="value" :ID="ID" />
    <label :for="ID">{{ Label }}</label>
</template>

<script setup>
const props = defineProps(['value', 'model', 'ID', 'Label'])
</script>

<style scoped>
input[type=radio] {
    display: none;
}

label {
    display: block;
    cursor: pointer;
    width: 100px;
    margin-right: 5px;
    text-align: center;
    border-radius: 5px;
    font-weight: 500;
    border: 1px solid transparent;
    color: var(--ui_blue);
    padding: 5px;
}

input[type=radio]:checked+label {
    border-color: var(--ui_blue);
}
</style>