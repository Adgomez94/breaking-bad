<script setup lang="ts">
import NavBar from '../../shared/components/NavBar.vue';

import { characterRoute } from '../router';

import { Router } from '../../../router/link-routes';


const routerLinks: Router[] = characterRoute.children!
  .filter( routeLink => (routeLink.props as { visible: boolean }).visible )
  .map( route => ({
  name: route.name as string,
  path: route.path,
  title: (route.props as { title: string, visible: boolean}).title
  }))
</script>

<template>

  <h1>Personajes</h1>

  <NavBar
    :links="routerLinks" 
    :show-icon="false"
  />

  <RouterView />

</template>

<style scoped>

</style>
