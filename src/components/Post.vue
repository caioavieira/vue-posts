<template>
  <div class="post">
    <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">Post deleted</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            The post was removed successfully from the application
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success btn-secondary" data-dismiss="modal">Ok</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div v-if="post !== null" class="col-12 text-center">
        <h3 v-if="!editing">{{ post.title }}</h3>
        <div class="row" v-else>
          <div class="col-sm-4"></div>
          <div class="col-sm-4">
            <input type="text" class="form-control" v-model="post.title">
            <br>
          </div>
          <div class="col-sm-4"></div>
        </div>
        <p v-if="!editing">{{ post.body }}</p>
        <div class="row" v-else>
          <div class="col-sm-4"></div>
          <div class="col-sm-4">
            <textarea class="form-control" v-model="post.body" rows="6"></textarea>
            <br>
          </div>
          <div class="col-sm-4"></div>
        </div>
        <div class="row">
          <div class="col-sm-3"></div>
          <div class="col-6 col-sm-3">
            <button class="btn btn-warning btn-block" @click="editPost(post)">
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </button>
          </div>
          <div class="col-6 col-sm-3">
            <button class="btn btn-danger btn-block" @click="deletePost()">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </div>
          <div class="col-sm-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'post',
  props: ['id'],
  data() {
    return {
      editing: false
    }
  },
  methods: {
    editPost(post) {
      if (this.editing) {
        this.post = {
          title: this.post.title,
          id: post.id,
          body: this.post.body,
          userId: post.id
        }
        this.editing = !this.editing
      } else {
        this.editing = !this.editing
      }
    },
    deletePost() {
      let posts = this.$store.state.posts
      posts.splice(this.$props.id, 1)
      this.$store.commit('SET_POSTS', posts)
      $('#modal').modal('show')
      $('.row').remove()
    }
  },
  computed: {
    post: {
      get() {
        return this.$store.state.posts[this.$props.id]
      },
      set(newValue) {
        let posts = this.$store.state.posts
        posts[this.$props.id] = newValue
        this.$store.commit('SET_POSTS', posts)
      }
    }
  },
  created() {
    this.post = this.$store.state.posts[this.$props.id]
  },
  mounted() {
    $('#modal').on('hide.bs.modal', e => this.$router.push('/'))
  }
}
</script>

<style scoped>

</style>
