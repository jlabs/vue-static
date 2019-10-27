<template>

    <ProjectLayout>
        <Project
            :theme="$page.project.theme"
            :title="$page.project.title"
            :image="$page.project.image"
            :content="$page.project.content"
            :languages="$page.project.languages"
        />
    </ProjectLayout>
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
import ProjectLayout from '~/layouts/ProjectLayout';
import Project from '~/components/Project';

export default {
    components: {
        ProjectLayout,
        Project
    }
}
</script>
