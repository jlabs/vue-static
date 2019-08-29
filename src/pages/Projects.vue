<template>
    <Layout>
        <h1>Projects</h1>
        <AllProjects/>
    </Layout>
</template>

<script>
    import AllProjects from '~/components/AllProjects.vue';

    export default {
      metaInfo: {
        title: 'Projects'
      },
      components: {
        AllProjects
      }
}
</script>
