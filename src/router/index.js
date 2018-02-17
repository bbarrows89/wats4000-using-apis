import Vue from 'vue'
import Router from 'vue-router'
import Rhymesaurus from '@/components/Rhymesaurus'
import Rhymetonyms from '@/components/Rhymetonyms'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Rhymesaurus',
      component: Rhymesaurus
    },
    {
      path: '/rhymetonyms',
      name: 'Rhymetonyms',
      component: Rhymetonyms
    }
  ]
})
