<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link> | <router-link :to="{ name: 'About' }">About</router-link> |
      <router-link :to="{ name: 'User', params: { username: 'tom' } }">User</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
  &:before,
  &:after {
    display: table;
    content: '';
  }
}
</style>
