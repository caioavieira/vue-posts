<template>
  <div class="create-post">
    <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">Post added</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            The post was inserted successfully from the application
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success btn-secondary" data-dismiss="modal">Ok</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-sm-4">
      </div>
      <div class="col-12 col-sm-4">
        <h2 class="text-center">Add Post</h2>

        <form @submit.prevent="addPost(post)">
          <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" v-model="post.title">
          </div>
          <div class="from-group">
            <label>Body</label>
            <textarea class="form-control" rows="6" v-model="post.body"></textarea>
          </div>
          <br>
          <button type="submit" class="btn btn-block btn-success">
            <i class="fa fa-plus"></i>
          </button>
        </form>
      </div>
      <div class="col-12 col-sm-4">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addPost',
  data() {
    return {
      post: {
        title: null,
        userId: null,
        body: null,
        id: null
      }
    }
  },
  methods: {
    addPost(post) {
      let posts = this.$store.state.posts
      posts.push(post)
      this.$store.commit('SET_POSTS', posts)
      $('#modal').modal('show')
    }
  },
  mounted() {
    $('#modal').on('hide.bs.modal', e => this.$router.push('/post/' + (this.$store.state.posts.length - 1).toString()))
  }
}
</script>

<style scoped>

</style>
