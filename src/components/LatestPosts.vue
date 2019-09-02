<template>
    <section>

        <section class="showcase">
          <section class="nes-container with-title">
            <h3 class="title">Latest Posts</h3> 

                <div class="latestPostsContainer">
                    <article v-for="edge in $static.allBlogPost.edges" :key="edge.node.id">
                        <!--<div v-html="edge.node.content" />-->

                        <h4>{{ edge.node.title }}</h4>
                        <p>{{ edge.node.date }}</p>
                        <g-link :to="`${edge.node.path}`">More..</g-link>
                    </article>  
                </div>
        
          </section>
        </section>
    </section>
</template>

<static-query>
    query LatestPosts {
        allBlogPost (sortBy: "date", order:DESC, perPage: 2, , filter: {status: { ne: "draft"}}) {
            edges {
                node {
                    id
                    title
                    date (format: "DD/MM/YY")
                    content
                    tags
                    path
                }
            }
        }
    }
</static-query>

<style <style scoped>
    .showcase {
        margin: 12px 0;
    }

    .latestPostsContainer {
        display: flex;
        justify-content:space-around;
        flex-wrap: wrap;
        flex-direction: row;
    }
</style>

