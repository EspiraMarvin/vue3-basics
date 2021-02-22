<template>
  <div class="home">
    <h2>Home</h2>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
    <button @click="handleClick">stop watching</button>
  </div>

  <hr><br>

  <div>
    <div v-if="error"> {{ error }} </div>
    <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
    </div>
    <div v-else> loading... </div>
    <button @click="showPosts = !showPosts">Toggle post</button>
    <button @click="posts.pop()">Delete a post</button>
  </div>
</template>

<script>

import PostList from "../components/PostList";
import getPosts from "../composables/getPosts";

export default {
  name: 'Home',
  components: {PostList},
  setup() {

    const { names, search, matchingNames, handleClick, posts, showPosts, error,load} = getPosts()

    load()

    return { names, search, matchingNames, handleClick, posts, showPosts, error }
  }
}
</script>
