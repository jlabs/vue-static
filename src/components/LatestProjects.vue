<template>
    <div class="p-2">
        <div class="text-2xl underline">Latest Projects</div> 
        <div v-for="edge in $static.allProject.edges" :key="edge.node.id" class="py-1">
            <g-link :to="`${edge.node.path}`" class="text-xl text-pink-600">
                <div>
                    {{ edge.node.title }}
                </div>
            </g-link>
        </div>  
    </div>
</template>

<static-query>
    query LatestProjects {
        allProject (sortBy: "date", order:DESC, limit: 3, filter: {	status: { contains:"live" } } ) {
            edges {
                node {
                    id
                    title
                    status
                    url
                    path
                }
            }
        }
    }
</static-query>


