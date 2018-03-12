<template>
  <div id="app">
    <Navi />
    <router-view/>
  </div>
</template>

<script>
import Navi from '@/components/Navi'

export default {
  name: 'App',
  components: { Navi }
}
</script>

<style>
:root {
  --white: 255,255,255;

  --white-blue: 233,242,249;
  --sky-blue: 156,196,228;
  --blue: 58,137,201;
  --dark-blue: 27,50,95;

  --orange: 242,108,79;
  
  --dark-grey: 31,31,31;
  --grey: 97,97,99;
  --light-grey: 217,212,209;
}

* {
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  box-sizing: border-box;
  transition: all .2s ease;
}

html {
  font-size: 62.5%;
}

a {
  text-decoration: none;
}

#app {
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  text-align: center;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: .5rem;
}

.btn--action {
  color: rgb(var(--white));
  background-color: rgb(var(--blue));
}
</style>
