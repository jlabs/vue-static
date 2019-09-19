<template>
  <div class="container mx-auto px-8 min-h-screen h-full">

      <!--<Header />-->


      <div class="flex min-h-screen h-full">
        
        <div class="w-1/6"></div>



        <div class="w-3/6 relative flex">
          <div class="self-start">
              <transition name="fade" appear>
                <main>
                  <slot/>
                </main>
              </transition>
          </div>
          <div class="absolute bottom-0 w-full mb-2">
            <Footer/>
          </div>
        </div>


        
        <div class="w-1/6 bg-pink-600">

          <div class="flex h-screen relative flex-row w-full items-stretch">

            <div class="self-center fixed">
              <Nav/>
            </div>

            <div class="absolute bottom-0 w-full p-2">
              <Social/>
            </div>  
            
          </div>

        </div>



        <div class="w-1/6 flex h-screen">
          <div class="self-center">
            <LatestPosts/>
            <LatestProjects/>
          </div>
        </div>



      </div>
      
      
      
  </div>
</template>

<script>
  import LatestPosts from '~/components/LatestPosts';
  import LatestProjects from '~/components/LatestProjects';
  import Nav from '~/components/Nav';
  import Footer from '~/components/Footer';
  import Header from '~/components/Header';
  import Social from '~/components/Social';
  


  export default {
    props: ["background"],
    components: {
      LatestPosts,
      LatestProjects,
      Footer,
      Header,
      Nav,
      Social,
    }
  }
</script>

<style lang="sass">
  
</style>

