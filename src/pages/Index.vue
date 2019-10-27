<template>
  <Layout>
    <div class="my-2 md:text-3xl text-6xl">
      Hello World!
    </div>
    <div class="">
      Have a look at the <g-link to='/about' class="text-pink-400">about page</g-link> for more info.
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
