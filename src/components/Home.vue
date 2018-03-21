<template>
  <div class="home">
    <section class="home__cta">
      <h1>Yet Another JSON Resume</h1>
      <p class="home__cta--landing">A fast, easy, and <span class="home__free">always free</span> way of<br> producing quality resumes.</p>
      <router-link to="/start" class="btn btn--action">Get Started</router-link>
      <router-link to="/sample" class="home__cta--sample">Or view a random sample</router-link>
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
      <h4>We try to curate the best pool as possible through a case-by-case basis. Due to an overwhelming amount of requests please be patient if you do not hear from us.</h4>
    </section>
    <section class="features">
      <div class="features__box">
        <ul class="features__list">
          <li class="features__item">
            <i class="fas fa-file fa-3x" data-fa-transform="shrink-7 right-.3 up-.2" data-fa-mask="fas fa-circle" style="color: rgb(var(--blue))"></i>
            <div class="features__item--content">
              <h3>Easy to print</h3>
              <p>Our templates are converted to be printed in PDF. No mess, no fuss. It just works.</p>
            </div>
          </li>
          <li class="features__item">
            <i class="fas fa-code fa-3x" data-fa-transform="shrink-7" data-fa-mask="fas fa-circle" style="color: rgb(var(--blue))"></i>
            <div class="features__item--content">
              <h3>For developers, by developers</h3>
              <p>All resumes are built with HTML &amp; CSS &mdash; making changes is super simple.</p>
            </div>
          </li>
          <li class="features__item">
            <i class="fas fa-mouse-pointer fa-3x" data-fa-transform="shrink-7 right-.8" data-fa-mask="fas fa-circle" style="color: rgb(var(--blue))"></i>
            <div class="features__item--content">
              <h3>One click JSON</h3>
              <p>Upload a .json file or just copy and paste it in. Let us do the work and we'll take it from there.</p>
            </div>
          </li>
        </ul>
        <ul class="features__list">
          <li class="features__item">
            <i class="fas fa-user-times fa-3x" data-fa-transform="shrink-7 right-.7" data-fa-mask="fas fa-circle" style="color: rgb(var(--blue))"></i>
            <div class="features__item--content">
              <h3>No account required</h3>
              <p>Are you going to come back after landing your job? Yeah, we didn't think so either.</p>
            </div>
          </li>
          <li class="features__item">
            <i class="fas fa-dollar-sign fa-3x" data-fa-transform="shrink-7" data-fa-mask="fas fa-circle" style="color: rgb(var(--blue))"></i>
            <div class="features__item--content">
              <h3>No pricing, no donations</h3>
              <p>All we ask is you consider supporting a <a href="http://charitywater.org/">charitable organization</a> instead.</p>
            </div>
          </li>
          <li class="features__item">
            <i class="fas fa-align-center fa-3x" data-fa-transform="shrink-7" data-fa-mask="fas fa-circle" style="color: rgb(var(--blue))"></i>
            <div class="features__item--content">
              <h3>One page only</h3>
              <p>We make sure our templates stand out so your resume lands in hands, not in the trash.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="started">
      <div class="started__box">
        <p class="started__statement">Stop wasting time and let's land that job.</p>
        <div>
          <router-link class="started__button" to="/start">
            Create your resume! <i class="fas fa-angle-right fa-2x"></i>
          </router-link>
        </div>
      </div>
    </section>
    <section class="footer">
      <div class="footer__box">
        <p>2018 yajr&trade; (yet another json resume) by <a class="woat" href="https://woat.github.io/">woat</a></p>
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

h3 {
  font-size: 2rem;
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

a {
  color: rgb(var(--blue));
}

.home__cta {
  padding-top: 10rem;
  padding-bottom: 10rem;
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

.home__cta--sample {
  display: block;
  font-size: 1.4rem;
  color: rgb(var(--white-blue));
  margin: 2.5rem 0;
}

.home__cta--sample:hover {
  text-decoration: underline;
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
  cursor: pointer;
}

.notify__button:hover {
  background: rgba(var(--yellow), .8);
}

.label {
  color: rgba(var(--dark-grey), .8);
}

.features {
  margin-top: 10rem;
  padding: 0 40rem;
}

.features__box {
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

.features__item--content {
  margin-left: 2rem;
}

.features__item--content > *:first-child {
  margin-bottom: .5rem;
}

.features__item--content > *:last-child {
  color: rgb(var(--grey));
  font-weight: 200;
}

.started {
  padding: 10rem 0;
}

.started__box {
  display: grid;
  grid-gap: 6rem;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.started__statement {
  color: rgb(var(--dark-grey));
  font-size: 3rem;
}

.started__button {
  display: inline-block;
  font-size: 3rem;
  padding: 1rem 4rem;
  border-radius: .4rem;
  color: white;
  background-color: rgb(var(--blue));
}

.started__button:hover {
  background-color: rgba(var(--blue), .9);
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(var(--dark-grey), .7);
}

.footer {
  height: 10rem;
  background-color: rgb(var(--white-blue));
  display: grid;
  justify-content: center;
  align-content: center;
}

.footer__box {
  color: rgb(var(--grey));
}

.fa-angle-right {
  margin-left: 2rem;
  margin-bottom: .5rem;
  vertical-align: middle;
  will-change: transform;
}

.woat {
  color: inherit;
  text-decoration: underline;
}

.btn {
  margin-top: 4rem; 
  font-size: 3rem;
  padding: 2rem 4rem;
}

.btn:hover {
  transform: translateY(-1px);
  background-color: rgba(var(--blue), .9);
  box-shadow: 0 2px 4px rgba(var(--dark-grey), .2);
}
</style>
