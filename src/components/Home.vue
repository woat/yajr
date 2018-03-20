<template>
  <div class="home">
    <section class="home__cta">
      <h1>Yet Another JSON Resume</h1>
      <p class="home__cta--landing">A fast, easy, and <span class="home__free">always free</span> way of<br> producing quality resumes.</p>
      <router-link to="start" class="btn btn--action">Get Started</router-link>
    </section>
    <section class="home__email">
      <div class="home__card">
        <h2>Interested in beta features?</h2>
        <label class="label">
          We are opening limited spots for beta testers, leave your email here to request access to experimental features that are open for curious developers.
          <div class="home__card--input">
            <input class="notify__input" type=text placeholder="Enter your email" /><button class="notify__button">Notify me</button>
          </div>
        </label>
      </div>
      <h4>We try to curate the best pool as possible through a case-by-case basis. Due to an overwhelming amount of requests please be paitent if you do not hear from us.</h4>
    </section>
    <section class="features">
      <div class="features__box">
        <ul class="features__list">
          <li class="features__item">
            <i class="fas fa-align-justify fa-5x"></i>
            <div class="features__item--content">
              <h3>A new feature</h3>
              <p>A short description of this new feature. This feature is a very nice feature to have.</p>
            </div>
          </li>
          <li class="features__item">
            <i class="fas fa-align-justify"></i>
            <div class="features__item--content">
              <h3>A new feature</h3>
              <p>A short description of this new feature. This feature is a very nice feature to have.</p>
            </div>
          </li>
          <li class="features__item">
            <i class="fas fa-align-justify"></i>
            <div class="features__item--content">
              <h3>A new feature</h3>
              <p>A short description of this new feature. This feature is a very nice feature to have.</p>
            </div>
          </li>
        </ul>
        <ul class="features__list">
          <li class="features__item">
            <i class="fas fa-align-justify"></i>
            <div class="features__item--content">
              <h3>A new feature</h3>
              <p>A short description of this new feature. This feature is a very nice feature to have.</p>
            </div>
          </li>
          <li class="features__item">
            <i class="fas fa-align-justify"></i>
            <div class="features__item--content">
              <h3>A new feature</h3>
              <p>A short description of this new feature. This feature is a very nice feature to have.</p>
            </div>
          </li>
          <li class="features__item">
            <i class="fas fa-align-justify"></i>
            <div class="features__item--content">
              <h3>A new feature</h3>
              <p>A short description of this new feature. This feature is a very nice feature to have.</p>
            </div>
          </li>
        </ul>
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

h2 {
  font-size: 3rem;
  font-weight: 300;
  color: rgb(var(--dark-grey));
}

h4 {
  font-size: 1.2rem;
  font-weight: 300;
  color: rgb(var(--grey));
  margin-top: 3rem;
  text-align: center;
}

.home__cta {
  padding-top: 10rem;
  padding-bottom: 20rem;
  background: 
  linear-gradient(to left, rgba(var(--dark-blue), .9), rgba(var(--blue), 1)),
  url("../assets/cta.jpg") no-repeat center;
  background-size: cover;
  text-align: center;
}

.home__cta--landing {
  font-size: 5rem;
  font-weight: 300;
  color: rgb(var(--white));
  text-shadow: 0 1px 2px rgba(var(--dark-grey), .2);
}

.home__free {
  font-size: inherit;
  font-weight: 600;
  color: rgb(var(--sky-blue));
}

.home__email {
  background: rgb(var(--white-blue));
  height: 20rem;
  margin: 0 60rem;
  padding: 2rem 4rem;
  margin-top: -10rem;
  border-image: linear-gradient(#f6b73c, #4d9f0c) 30;
  border-radius: .5rem;
  box-shadow: 0 2px 4px rgba(var(--dark-grey), .4);
}

.home__card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  height: 100%;
}

.home__card--input {
  display: inline-block;
  overflow: hidden;
  margin-top: 2rem;
  height: 5rem;
  border-radius: .4rem;
  border: 1px solid rgba(var(--grey), .4);
}

.notify__input {
  height: inherit;
  border: 0;
  padding: 1rem 2rem;
}

.notify__button {
  height: inherit;
  background: rgb(var(--yellow));
  border: 0;
  padding: 1rem 2rem;
}

.label {
  color: rgba(var(--dark-grey), .8);
}

.features {
  margin-top: 10rem;
  border: 1px solid red;
  padding: 0 30rem;
}

.features__box {
  border: 1px solid blue;
  display: flex;
  justify-content: space-around;
}

.features__list {
  display: inline-block;
  width: 40%;
  list-style-type: none;
}

.features__item {
  display: flex;
  align-items: center;
}

.features__item:not(:first-child) {
  margin-top: 5rem;
}

.btn {
  margin-top: 4rem; 
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(var(--dark-grey), .2);
}
</style>
