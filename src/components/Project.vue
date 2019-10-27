<template>
    <div class="">
        
    <div v-if="theme" :class="setTheme(theme)" class="border border-r border-t-0 border-b-0 border-l-0 border-gray-400" style="height:2vh;"></div>
        
        <div class="text-3xl pl-2">{{title}}</div>

        <div v-if="theme" :class="setTheme(theme)" class="border border-r border-t-0 border-b-0 border-l-0 border-gray-400" style="height:1vh;"></div>
        
        <g-image :src="image" fit="contain" />

        <div class="mr-3">
            <div class="my-2 px-2" v-html="content"></div>
            <div class="">
                <div class="py-4 px-2">
                    <span v-for="language in languages" :key="language">
                        <span class="inline-block bg-gray-200 rounded-full px-2 py-2 my-1 text-sm font-semibold text-gray-700 mr-2">
                            {{language}}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'theme',
        'image',
        'title',
        'content',
        'status',
        'languages'
    ],
    methods: {
        setTheme: function (theme) {
            return "bg-" + theme + "-600";
        }
    }
}
</script>

