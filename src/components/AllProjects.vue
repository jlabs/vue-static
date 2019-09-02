<template>
    <section>
        <div v-for="edge in $static.allProject.edges" :key="edge.node.id" class="nes-container is-rounded">
            <!--<div v-html="edge.node.content" />-->

            
            
            <g-link :to="`${edge.node.path}`">
                    <h4>{{ edge.node.title }}</h4>
                
                    
                
            </g-link>

            <span v-for="s in edge.node.status" :key="s">
                <span class="nes-text is-success" style="margin-left: 6px;" v-if="s == 'live'">live</span>
                <span class="nes-text is-warning" style="margin-left: 6px;" v-if="s == 'ongoing'">on-going</span>
            </span>
            
        </div>
    </section>
</template>

<static-query>
    query AllProjects {
        allProject {
		    edges {
			    node {
                    id
				    title
				    languages
                    path
                    status
			    }
		    }
	    }
    }
</static-query>

<style scoped>
    h4 {
        margin: 0;
        display: inline;
    }
    .nes-container {
        margin: 12px 0;
    }
</style>
