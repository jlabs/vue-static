<template>
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">
            <g-link :to="path" class="text-pink-600 md:text-xl text-2xl uppercase">
                {{ title }}
            </g-link>
        </div>

         <div class="my-2">
                    <span v-for="s in status" :key="s" class="text-xs">
                        <span class="rounded p-1 mr-1" :class="{
                            'bg-green-400' : s == 'live', 
                            'bg-yellow-400' : s == 'ongoing',
                            'bg-blue-400' : s == 'finished',
                            'bg-purple-400' : s == 'idea',
                            }">
                            {{s}}
                </span>
            </span>
        </div>

        <p class="text-gray-700 text-base md:text-xs">
                    {{ summary }}
                </p> 

                <div class="mt-3">
				<span v-for="l in languages" :key="l" class="md:hidden text-xs bg-gray-200 rounded text-gray-700 p-1 mr-1 inline-block mb-1">
                        
                        {{l}}
                        
                    </span>
                </div>
    </div>
</template>

<script>
export default {
    props: [
        'title',
        'summary',
        'path',
        'status',
        'languages'
    ]
}
</script>

