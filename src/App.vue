<template>
  <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
    <v-teleport>
      hello world
    </v-teleport>

    <v-teleport-location class="some" tag="article"/>
  </div>
</template>

<script>

import { vTeleport, vTeleportLocation } from './components/teleport'
export default {
  name: 'app',
  components: {
    vTeleport,
    vTeleportLocation,
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
