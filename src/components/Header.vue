<template>
    <header class="header">
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>     
      </header>
</template>



<script>  
  import Nav from '~/components/Nav'; 

  export default {
    components: {  
      Nav      
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