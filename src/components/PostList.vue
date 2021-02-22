<template>
    <div class="post-">
        <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post" />
        </div>
    </div>
</template>

<script>
    import { onMounted, onUnmounted , onUpdated} from 'vue'
    import SinglePost from "./SinglePost";
    export default {
        name: "PostList",
        components: {SinglePost},
        props: ['posts'],
        setup(props) {
            onMounted(() => {
                console.log('component mounted')
            }),
            onUnmounted(() => {
                console.log('component onUnmounted')
            }),
            onUpdated(() => {
                console.log('component onUpdated')
            })
        },
        //example using options api for lifecycle hooks
        mounted() {
            console.log('component mounted')
        },
        unmounted() {
            console.log('component onUnmounted')
        },
        updated() {
            console.log('component onUpdated')

        }
    }
</script>

<style scoped>

</style>
