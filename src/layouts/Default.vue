<template>
  <div>
      <header class="header">
        <strong>
          <g-link to="/">{{ $static.metaData.siteName }}</g-link>
        </strong>

        <Nav/>
        
      </header>
      <g-image v-if="background" :src="background" class="billboard" />
      <!--<g-image src="~/assets/images/65.jpg" width="200" quality="100"/>-->
        <div class="layout">
          <transition name="fade" appear>
            <main>

              <slot/>
            </main>
          </transition>

        
        <LatestPosts/>
            
          


        <Footer/>
      </div>
  </div>
</template>

<script>
  import LatestPosts from '~/components/LatestPosts';
  import Nav from '~/components/Nav';
  import Footer from '~/components/Footer';

  export default {
    props: ["background"],
    components: {
      LatestPosts,
      Nav,
      Footer
    }
  }
</script>


<static-query>
  query {
    metaData {
      siteName
    }
  }
</static-query>

<style lang="scss">
  body {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    margin:0;
    padding:0;
    line-height: 1.5;
    font-size: $baseFontSize;
  }

  .layout {
    max-width: 760px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;

  }
    .header {
      max-width: 760px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      //height: 80px;
      padding: 20px;
      margin: 0 auto;
    }

  .billboard {
    width: 100%;
    height: auto;
  }

  .nav__link {
    margin-left: 20px;
  }

  .fade-enter-active {
    transition: 1s ease opacity;
  }
  .fade-enter {
    opacity: 0;
  }
</style>
