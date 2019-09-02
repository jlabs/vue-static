<template>
    <Layout>
        <h1>{{$page.project.title}}</h1>
        <div v-html="$page.project.content"></div>
        <h4>Languages used/learnt</h4>
        <div class="lists">

            <ul class="nes-list is-disc">

                <li v-for="language in $page.project.languages" :key="language">{{language}}</li>
            </ul>
        </div>
    </Layout>
</template>

<page-query>
    query Project ($path: String!) {
        project (path: $path) {
            title
            content
            languages
        }
    }
</page-query>