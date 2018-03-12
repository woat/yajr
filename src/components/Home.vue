<template>
  <div class="home">
    <h1>Yet Another JSON Resume</h1>
    <p>A fast, easy, and <span class="home__free">always free</span> way of<br> producing quality resumes.</p>
    <router-link to="start" class="btn btn--action">Get Started</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
.home {
}

h1 {
  font-size: 2rem;
  font-weight: 400;
  color: rgb(var(--grey));
}

p {
  font-size: 5rem;
  font-weight: 300;
  color: rgb(var(--dark-grey));
}

.home__free {
  font-size: inherit;
  font-weight: 600;
  color: rgb(var(--blue));
}

.btn {
  margin-top: 4rem; 
}
</style>
