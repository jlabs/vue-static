<template>
    <section>
        <div v-for="edge in $static.allBlogPost.edges" :key="edge.node.id" class="nes-container is-rounded">
            <!--<div v-html="edge.node.content" />-->
            <g-link :to="`${edge.node.path}`">{{ edge.node.title }}</g-link>
            <p>{{ edge.node.date }}</p>

        </div>
        
            <Pager :info="$static.allBlogPost.pageInfo"/>
            <div class="">
                {{$static.allBlogPost.pageInfo.totalPages}}
            </div>
    </section>
</template>

<static-query>
    query AllPosts($page: Int) {
        allBlogPost ( perPage:2, page:$page, sortBy: "date", order:DESC, filter: { status: { eq: "live" }} ) @paginate {
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
                    status
                }
            }
        }
    }
</static-query>

<script>
    import { Pager } from 'gridsome'

    export default {
    components: {
        Pager
    }
    }
</script>
