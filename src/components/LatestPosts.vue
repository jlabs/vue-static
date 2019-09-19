<template>
    <div class="p-2">
        <div class="text-2xl underline">Latest Posts</div> 
            <div v-for="edge in $static.allBlogPost.edges" :key="edge.node.id" class="py-1">
                <g-link :to="`${edge.node.path}`" class="text-xs text-pink-600">
                    <div class="text-xl">
                        {{ edge.node.title }}
                        </div>
                    </g-link>
                <div class="text-sm">
                    {{ edge.node.date }}
                </div>
            </div>  
            <!--<div class=""><g-link class="" to="/posts">View all...</g-link></div>-->
    </div>
</template>

<static-query>
    query LatestPosts {
        allBlogPost (sortBy: "date", order:DESC, perPage: 3, , filter: {status: { eq: "live"}}) {
            edges {
                node {
                    id
                    title
                    date (format: "Do MMM 'YY")
                    content
                    tags
                    path
                }
            }
        }
    }
</static-query>


