<template>
    <Layout>
        <div class="">

            <div class="flex-wrap flex mb-12">
                <div v-for="edge in $page.allProject.edges" :key="edge.node.id" class="md:w-full w-2/5 shadow-lg m-2 mx-5">
                
                    <ProjectCard 
                        :title="edge.node.title" 
                        :summary="edge.node.summary"
                        :path="edge.node.path"
                        :status="edge.node.status"
                        :languages="edge.node.languages"
                    />
                
                </div>
            </div>
        
            <Pager :info="$page.allProject.pageInfo" class="mt-4 text-xl text-center mb-12"/>


    </div>
        
    </Layout>
</template>

<script>
    import { Pager } from 'gridsome'
    import ProjectCard from '~/components/ProjectCard'
    import AllProjects from '~/components/AllProjects'

    export default {
      metaInfo: {
        title: 'Projects'
      },
      components: {
        Pager,
        ProjectCard,
        AllProjects
      }
}
</script>

<page-query>
    query AllProjects ($page: Int) {
        allProject ( perPage: 4, page: $page) @paginate {
          pageInfo{
                totalPages
                currentPage
            }
          edges {
            node {
                      id
              title
              languages
                      path
                      status
                      summary
            }
          }
	    }
    }
</page-query>
