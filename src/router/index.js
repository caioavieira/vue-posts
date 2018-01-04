import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Post from '@/components/Post'
import AddPost from '@/components/AddPost'
import NotFound from '@/components/NotFound'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post,
      props: true
    },
    {
      path: '/create-post',
      name: 'CreatePost',
      component: AddPost
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  linkExactActiveClass: 'active'
})
