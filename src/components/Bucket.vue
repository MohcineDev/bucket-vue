<template>
  <div id="container">
    <h1>Bucket Generator</h1>
    <input type="text" class="bucket-name" aria-label="bucket name" />

    <form id="form" @submit.prevent="something">
      <div>
        <label for="num">Number of Chars</label>
        <div>
          <input type="range" min="4" max="60" id="range" aria-label="range" />
          <input type="number" min="4" max="60" id="num" aria-label="number" />
        </div>
      </div>

      <div class="option">
        <label for="upper">Include Uppercase</label>
        <input type="checkbox" id="upper" disabled />
      </div>
      <div class="option">
        <label for="lower">Include LowerCase</label>
        <input type="checkbox" id="lower" />
      </div>

      <button type="submit" @submit.prevent="something">Generate</button>
    </form> 
  </div>
</template>


<script setup> 
</script>

<style scoped>

#container {
  background-color: var(--ui_blue);
  padding: 0 3em 2em;
  border-radius: 1.5rem;
  border: 2px solid var(--ui_blue);
  display: flex;
  color: var(--ui_light);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 5px var(--ui_blue);
  position: relative;
}

#container::before {
  content: "";
  width: 30px;
  height: 50px;
  background-color: var(--ui_blue);
  position: absolute;
  top: -50px;
  right: 20px;
  border-radius: 20px 20px 0 0;
  box-shadow: 0px 0px 5px var(--ui_blue);
}

#container:hover {
  box-shadow: 0px 0px 10px var(--ui_blue);
}

h1 {
  margin: 2rem 0 1rem;
}

.bucket-name {
  font-weight: 100;
  background-color: transparent;
  border-width: 0 2px 0 2px;
  border-style: solid;
  border-color: var(--ui_white);
  border-radius: 5px;
  padding: 4px 10px;
  letter-spacing: 1px;
  color: var(--blue);
  font-size: 1em;
  margin: 1rem 0;
  text-align: center;
}

form {
  min-width: 380px;
}

form > div {
  display: grid;
  grid-template-columns: 200px auto;
  margin: 1rem 0;
  align-items: center;
}

form > div > div {
  display: flex;
  align-items: center;
}

button,
input {
  outline: none;
}

input[type="number"] {
  width: 2rem;
}

input[type="number"],
input[type="checkbox"],
label {
  cursor: pointer;
}

button {
  width: 100%;
  cursor: pointer;
  margin: 10px 0;
  background-color: var(--ui_light);
  color: var(--ui_blue);
  padding: 10px;
  font-size: 1em;
  border-radius: 5em;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 0.3s;
  font-weight: 600;
  border: none;
}

button:hover {
  transform: translateY(-3px);
}

/* add-input */
.add-input {
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  left: calc(50% - 20px);
}

.add-input:hover {
  transform: scale(1.07);
}

.light .buckets input {
  border: 1px solid var(--dark-bg);
  color: var(--dark-bg);
}

@media only screen and (max-width: 992px) {
  .middle img {
    width: 150px;
  }
}

@media screen and (max-width: 920px) {
  .buckets .wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 786px) {
  .buckets .wrapper {
    grid-template-columns: 1fr;
  }

  #container {
    padding: 0 1rem 3em;
  }

  .middle img {
    display: none;
  }

  form {
    min-width: 200px;
  }

  form > div {
    display: grid;
    grid-template-columns: 150px auto;
    margin: 1rem 0;
  }
}
</style>