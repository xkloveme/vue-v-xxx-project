<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <hk-button msg="You have successfully installed vue-v-xxx" >1234</hk-button>
    <HelloWorld msg="You have successfully installed vue-v-xxx" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
