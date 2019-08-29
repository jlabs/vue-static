<template>
    <section>
        <article v-for="edge in $static.allProject.edges" :key="edge.node.id">
            <!--<div v-html="edge.node.content" />-->

            
            
            <g-link :to="`${edge.node.path}`"><h4>{{ edge.node.title }}</h4></g-link>
        </article>
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
			    }
		    }
	    }
    }
</static-query>