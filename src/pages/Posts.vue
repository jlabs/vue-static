<template>
  <Layout>
    <div v-for="edge in $page.allBlogPost.edges" :key="edge.node.id" class="my-2">
        <g-link :to="`${edge.node.path}`">
            <div class="text-3xl text-pink-600">
                {{ edge.node.title }}
            </div>
        </g-link>
        <!--<div class="" v-html="`${edge.node.content}`"></div>-->
        
        <div class="font-thin">{{ edge.node.date }}</div>
        <Pager :info="$page.allBlogPost.pageInfo" class="mt-4 text-xl"/>
    </div>
  </Layout>
</template>

<script>
import { Pager } from 'gridsome'

export default {
    data() {
        return {
            excerptTextLimit:10,
        }       
    },
    components: {
        Pager,
    },
    methods: {
        setExcerpt(word) {
            return "hello";
        }
    }
}
</script>

<page-query>
query AllPosts($page: Int) {
        allBlogPost ( perPage:5, page:$page, sortBy: "date", order:DESC, filter: { status: { eq:"live" } } ) @paginate {
            pageInfo {
                totalPages
                currentPage
            }
            edges {
                node {
                    id
                    title
                    date (format: "Do MMM YYYY")
                    content
                    tags
                    path
                }
            }
        }
    }
</page-query>