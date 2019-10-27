<template>
  <Layout>
      <div class="">
    <div v-for="edge in $page.allBlogPost.edges" :key="edge.node.id" class="my-2">
        
        <PostCard
            :title="edge.node.title"
            :path="edge.node.path"
            :date="edge.node.date"
        />
    </div>
        <Pager :info="$page.allBlogPost.pageInfo" class="mt-4 text-xl"/>
    </div>
  </Layout>
</template>

<script>
import { Pager } from 'gridsome'
import PostCard from '~/components/PostCard'

export default {
    data() {
        return {
            excerptTextLimit:10,
        }       
    },
    components: {
        Pager,
        PostCard
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