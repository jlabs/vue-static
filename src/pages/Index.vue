<template>
  <Layout>
    <div class="my-2 text-6xl">
      Hello World!
    </div>
    <div class="">
      Have a look at the <g-link to='/about' class="text-pink-400">about page</g-link> for more info.
    </div>
    
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2" role="alert">
      <strong class="font-bold">This site is not responsive.</strong>
      <span class="block sm:inline">Yet.</span>
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
