<script setup lang="ts">
import NavBar from './modules/shared/components/NavBar.vue'

import { routerLinks } from './router/link-routes'
</script>

<template>
  <div class="wrapper">
    <header>
      <NavBar
        title="BreakingBad"
        :links="routerLinks"
      />
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>

</style>
