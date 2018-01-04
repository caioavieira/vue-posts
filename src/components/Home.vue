<template>
  <div class="home">
    <div class="row">
      <div v-for="(post, i) in $store.state.posts" :key="i" class="col-12 col-sm-4 text-center">
        <h3>{{ post.title }}</h3>
        <p>
          {{ post.body }}
        </p>
        <button class="btn btn-primary" @click="viewPost(i)">
          <i class="fa fa-eye" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  methods: {
    viewPost(index) {
      this.$router.push('/post/' + index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 90%;
}
</style>
