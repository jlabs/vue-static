<template>
    <section>
        <h1>Posts</h1>
        <article v-for="edge in $static.allBlogPost.edges" :key="edge.node.id">
            <!--<div v-html="edge.node.content" />-->
            <h4>{{ edge.node.title }}</h4>
            <p>{{ edge.node.date }}</p>
            <g-link :to="`${edge.node.path}`">More..</g-link>
        </article>
    </section>
</template>

<static-query>
    query AllPosts {
        allBlogPost (sortBy: "date", order:DESC, filter: {status: { ne: "draft"}}) {
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
</static-query>