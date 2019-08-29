<template>
    <div>
        <h1>Layout TWO</h1>
        <slot/>
        
    </div>
</template>

<script>
export default {
    props: ["latest"],
    components: {
        LatestPosts
    }
};
</script>
