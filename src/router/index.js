import Vue from 'vue'
import Router from 'vue-router'

import Board from '@/components/Board'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Editor from '@/components/Editor'
import Post from '@/components/Post'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/board'
    }, {
      path: '/board',
      name: 'Доска',
      component: Board
    }, {
      path: '/login',
      name: 'Вход',
      component: Login
    }, {
      path: '/register',
      name: 'Регистрация',
      component: Register
    }, {
      path: '/edit',
      name: 'Редактор',
      component: Editor
    }, {
      path: '/post/:postid',
      name: 'Пост',
      component: Post
    }, {
      path: '/about',
      name: 'О сайте',
      component: About
    }
  ]
})
