<template>
  <header>
    <div class="wrapper">
      <nav>
        <div class="nav-wrapper">
          <a class="brand-logo">
            <RouterLink :to="{ name: 'bindingView' }">Cursos</RouterLink>
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <RouterLink :to="{ name: 'bindingView' }">Binding</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'lifeCycleView' }">LifeCycle</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'directivesView' }">Directives</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'listsView' }">Lists</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'conditionalsView' }">Conditionals</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'eventsView' }">Events</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'cssView' }">CSS</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'formsView' }">Forms</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'computedPropertiesView' }">Computed Properties</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped></style>
