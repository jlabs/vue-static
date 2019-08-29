<template>
    <Layout>
        
        <AllPosts/>
    </Layout>
</template>

<script>

import AllPosts from '~/components/AllPosts.vue';

export default {
  metaInfo: {
    title: 'Posts'
  },
  components: {
    AllPosts
  }
}
</script>
