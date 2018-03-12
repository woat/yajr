<template>
  <div class="navi">
    <div class="navi__left">
      <router-link to="">
        <div class="navi__icon">
          <span class="fa-2x">
            <i class="fas fa-align-left" data-fa-transform="shrink-8" data-fa-mask="fas fa-circle"></i>
          </span>
          <span class="navi__icon--text">YAJR</span>
        </div>
      </router-link>
    </div>

    <div class="navi__right">
      <ul class="navi__list">
        <router-link to=""><li class="navi__list--item">Start</li></router-link>
        <router-link to=""><li class="navi__list--item">Help</li></router-link>
        <router-link to=""><li class="navi__list--item">Contact</li></router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navi'
}
</script>

<style scoped>
.navi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: .3rem solid rgba(var(--orange), .7);
  border-bottom: .1rem solid rgb(var(--light-grey));
  box-shadow: 0 1px 2px rgba(var(--grey), .2);
}

.navi__left {
  order: -1;
}

.navi__icon {
  display: flex;
  align-items: center;
  color: rgb(var(--orange));
}

.navi__icon:hover {
  color: rgba(var(--orange), .6);
}

.navi__icon:hover .navi__icon--text {
  color: rgba(var(--sky-blue), .6);
}

.navi__icon--text {
  font-size: 4rem;
  font-weight: 600;
  color: rgb(var(--grey));
}

.navi__list > * {
  margin-left: 2rem;
}

.navi__list--item {
  display: inline;
  position: relative;
  overflow: hidden;
  color: rgb(var(--dark-grey));
  font-size: 2rem;
  font-weight: 400;
}

.navi__list--item:after {
  content: "";
  position: absolute;
  z-index: -1;
  right: 0;
  width: 0;
  bottom: -.5rem;
  background: rgba(var(--orange), .8);
  height: .2rem;
  border-radius: .5rem;
  transition-property: width;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
}

.navi__list--item:hover:after,
.navi__list--item:focus:after,
.navi__list--item:active:after {
  left: 0;
  right: auto;
  width: 100%;
}

.navi__list--item:hover {
  color: rgb(var(--blue));
}
</style>
