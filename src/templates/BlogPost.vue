<template>
    <Post :background="$page.blogPost.image" class="">
        <div class="text-3xl md:text-2xl font-black">{{$page.blogPost.title}}</div>
        <div class="text-sm font-semibold">{{$page.blogPost.date }}</div>
        <div class="text-sm my-1 font-thin">{{$page.blogPost.timeToRead}} mins to read</div>
        <div class="mr-2" v-html="$page.blogPost.content"></div>
    </Post>
</template>

<page-query>
    query Post ($path: String!) {
        blogPost (path: $path) {
            title
            content
            tags
            date (format: "Do MMM YYYY")
            image (height: 400)
            timeToRead
            status
        }
    }
</page-query>

<script>
import Post from '~/layouts/Post'
export default {
    components: {
        Post
    }
}
</script>
