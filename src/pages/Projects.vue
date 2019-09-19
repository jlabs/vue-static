<template>
    <Layout>
      <div class="">
        <!--
        <div class="inline-flex">
            <button class="bg-gray-300 hover:bg-pink-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            html
            </button>
            <button class="bg-gray-300 hover:bg-pink-400 text-gray-800 font-bold py-2 px-4">
            css
            </button>
            <button class="bg-gray-300 hover:bg-pink-400 text-gray-800 font-bold py-2 px-4 rounded-r">
            js
            </button>
        </div>
        -->
    <div class="flex-wrap flex mb-12">
        <div v-for="edge in $page.allProject.edges" :key="edge.node.id" class="w-2/5 shadow-lg m-2 mx-5">
            <div class="px-6 py-4">

                <div class="font-bold text-xl mb-2">
                    <g-link :to="`${edge.node.path}`" class="text-pink-600 text-2xl uppercase">
                        {{ edge.node.title }}
                    </g-link>
                </div>


                <div class="my-2">
                    <span v-for="s in edge.node.status" :key="s" class="text-xs">
                        <span class="rounded p-1 mr-1" :class="{
                            'bg-green-400' : s == 'live', 
                            'bg-yellow-400' : s == 'ongoing',
                            'bg-blue-400' : s == 'finished',
                            'bg-purple-400' : s == 'idea',
                            }">
                            {{s}}
                        </span>
                    </span>
                </div>

                <p class="text-gray-700 text-base">
                    {{ edge.node.summary }}
                </p> 
                 
                <div class="mt-3">
				<span v-for="l in edge.node.languages" :key="l" class="text-xs bg-gray-200 rounded text-gray-700 p-1 mr-1 inline-block mb-1">
                        
                        {{l}}
                        
                    </span>
                </div>

                <!--<div class="py-4">
                    <span v-for="s in edge.node.status" :key="s">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" v-if="s == 'live'">#live</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" v-if="s == 'ongoing'">#on-going</span>
                    </span>
                </div>-->
            </div>
            
        </div>
    </div>
    <Pager :info="$page.allProject.pageInfo" class="mt-4 text-xl text-center"/>
    </div>
        
    </Layout>
</template>

<script>
    import { Pager } from 'gridsome'

    export default {
      metaInfo: {
        title: 'Projects'
      },
      components: {
        Pager
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
