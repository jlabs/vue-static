<template>
    <div class="">
        <g-link :to="path">
            <div class="md:text-xl text-3xl text-pink-600">
                {{ title }}
            </div>
        </g-link>
        <!--<div class="" v-html="`${edge.node.content}`"></div>-->
        
        <div class="font-thin md:text-xs">{{ date }}</div>
    </div>
</template>

<script>
export default {
    props: [
        'title',
        'path',
        'date'
    ]
}
</script>
