<template>
    <nav class="nav">
          <g-link class="nav__link nes-btn is-warning" exact-active-class="is-primary" to="/">Home</g-link>
          <g-link class="nav__link nes-btn is-warning" exact-active-class="is-primary" to="/posts">Posts</g-link>
          <g-link class="nav__link nes-btn is-warning" exact-active-class="is-primary" to="/projects">Projects</g-link>
          <g-link class="nav__link nes-btn is-warning" exact-active-class="is-primary" to="/about">About</g-link>
        </nav>
</template>

<style scoped>
  .nes-btn {
    margin: 0 6px;
  }
  .nes-btn:last-child {
    margin-right: 0;
  }
</style>


