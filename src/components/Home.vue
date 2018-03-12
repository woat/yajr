<template>
  <div class="home">
    <section class="home__cta">
      <h1>Yet Another JSON Resume</h1>
      <p>A fast, easy, and <span class="home__free">always free</span> way of<br> producing quality resumes.</p>
      <router-link to="start" class="btn btn--action">Get Started</router-link>
    </section>
    <section class="home__faq">
      <div class="home__card">
        owo
      </div>
    </section>
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
  color: rgba(var(--light-grey), .7);
  margin-bottom: 1rem;
}

p {
  font-size: 5rem;
  font-weight: 300;
  color: rgb(var(--white));
  text-shadow: 0 1px 2px rgba(var(--dark-grey), .2);
}

.home__cta {
  padding: 15rem 0;
  background: 
    linear-gradient(to left, rgba(var(--dark-blue), .9), rgba(var(--blue), 1)),
    url("../assets/cta.jpg") no-repeat center;
  background-size: cover;
}

.home__free {
  font-size: inherit;
  font-weight: 600;
  color: rgb(var(--sky-blue));
}

.home__faq {
  border: 1px solid orange;
}

.btn {
  margin-top: 4rem; 
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(var(--dark-grey), .2);
}

.btn:
</style>
