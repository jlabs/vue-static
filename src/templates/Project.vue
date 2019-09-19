<template>

    <Project>
        
        <div v-if="$page.project.theme" :class="setTheme($page.project.theme)" class="border border-r border-t-0 border-b-0 border-l-0 border-gray-400" style="height:2vh;"></div>
        
            <div class="text-3xl">{{$page.project.title}}</div>

            <div v-if="$page.project.theme" :class="setTheme($page.project.theme)" class="border border-r border-t-0 border-b-0 border-l-0 border-gray-400" style="height:1vh;"></div>
            
            <g-image :src="$page.project.image" fit="contain" />

            <div class="mr-3">
            <div class="my-2" v-html="$page.project.content"></div>
            <div class="">
                <div class="py-4">
                    <span v-for="l in $page.project.languages" :key="l">
                        <span class="inline-block bg-gray-200 rounded-full px-2 py-2 my-1 text-sm font-semibold text-gray-700 mr-2">
                            {{l}}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </Project>
</template>

<page-query>
    query Project ($path: String!) {
        project (path: $path) {
            title
            content
            languages
            theme
            image
        }
    }
</page-query>

<script>
import Project from '~/layouts/Project';
export default {
    components: {
        Project
    },
    mounted() {
        console.log("theme=",$page.project.theme);
    },
    methods: {
        setTheme: function (theme) {
            return "bg-" + theme + "-600";
        }
    }
}
</script>
