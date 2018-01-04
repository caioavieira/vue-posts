<template>
  <div id="app">
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link class="navbar-brand" to="/">

      </router-link>

      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/create-post">Add post</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  created () {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        let posts = response.data.filter(post => !(post instanceof Array))
        this.$store.commit('SET_POSTS', posts)
      })
      .catch(error => console.log(error))
  }
}
</script>

<style>
.navbar-light {
  background-color: #FFFFFF;
}

.navbar-nav > .nav-item {
  border-right: 1px solid rgb(211, 202, 202);
}
</style>
