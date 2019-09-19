<template>

  <nav class="p-2 w-full">
    <ul>
        <li><g-link class="text-white text-lg hover:text-gray-800 text-2xl" exact-active-class="text-gray-800 text-3xl" to="/">Home</g-link></li>
        <li><g-link class="text-white text-lg hover:text-gray-800 text-2xl" exact-active-class="text-gray-800 text-3xl" to="/posts">Posts</g-link></li>
        <li><g-link class="text-white text-lg hover:text-gray-800 text-2xl" exact-active-class="text-gray-800 text-3xl" to="/projects">Projects</g-link></li>
        <!--<li><g-link class="text-white text-lg hover:text-gray-800 text-2xl" exact-active-class="text-gray-800 text-3xl" to="/repos">Repos</g-link></li>-->
        <li><g-link class="text-white text-lg hover:text-gray-800 text-2xl" exact-active-class="text-gray-800 text-3xl" to="/about">About</g-link></li>        
        <li><g-link class="text-white text-lg hover:text-gray-800 text-2xl" exact-active-class="text-gray-800 text-3xl" to="/what">What I ...</g-link></li>        
        <li><g-link class="text-white text-lg hover:text-gray-800 text-2xl" exact-active-class="text-gray-800 text-3xl" to="/contact">Contact</g-link></li>
    </ul>
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


<static-query>
  query {
    metaData {
      siteName
    }
  }
</static-query>