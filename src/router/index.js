import { createRouter, createWebHistory } from 'vue-router'
import BindingView from '../views/BindingView.vue'
import LifeCycleView from '../views/LifeCycleView.vue'
import DirectivesView from '../views/DirectivesView.vue'
import ListsView from '../views/ListsView.vue'
import ConditionalsView from '../views/ConditionalsView.vue'
import ComputedPropertiesView from '../views/ComputedPropertiesView.vue'
import EventsView from '../views/EventsView.vue'
import CSSView from '../views/CSSView.vue'
import FormsView from '../views/FormsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'bindingView',
      component: BindingView
    },
    {
      path: '/lifecycle',
      name: 'lifeCycleView',
      component: LifeCycleView
    },
    {
      path: '/directives',
      name: 'directivesView',
      component: DirectivesView
    },
    {
      path: '/lists',
      name: 'listsView',
      component: ListsView
    },
    {
      path: '/conditionals',
      name: 'conditionalsView',
      component: ConditionalsView
    },
    {
      path: '/computedproperties',
      name: 'computedPropertiesView',
      component: ComputedPropertiesView
    },
    {
      path: '/events',
      name: 'eventsView',
      component: EventsView
    },
    {
      path: '/css',
      name: 'cssView',
      component: CSSView
    },
    {
      path: '/forms',
      name: 'formsView',
      component: FormsView
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router
