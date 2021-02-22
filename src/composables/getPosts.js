import {computed, ref, watch, watchEffect} from "vue";

const getPosts = () => {
    const search = ref('')
    const names = ref(['mario','yoshi','luigi','toad','bowser','koopa','peach']);

    const stopWatch = watch(search, () => {
        // console.log('watch func run')
    });

    const stopWatchEffect = watchEffect(() => {
        // console.log('watch effect run', search.value)
    });

    const matchingNames = computed(() => {
        return names.value.filter((name) => name.includes(search.value))
    });

    const handleClick = (() => {
        stopWatch()
        stopWatchEffect()
    });

    const posts = ref([]);
    const error = ref(null);

    const showPosts = ref(true);

    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/posts')
            if (!data.ok){
                throw Error('no data available')
            }
            posts.value = await data.json()
        }
        catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { names, search, matchingNames, handleClick, showPosts, posts, error, load }

};

export default getPosts
