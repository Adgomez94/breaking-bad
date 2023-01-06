
<script setup lang="ts">
import { RouterLink } from 'vue-router';

import type { Router } from '../../../router/link-routes';

type Props = {
  title?: string;
  links?: Router[];
  showIcon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showIcon: true,
  links: () => []
})
</script>

<template>
  <nav>
    <img v-if="props.showIcon" src="../../../assets/vue.svg" alt="Vue Logo" height="25" width="25" />
    <span v-if="props.title">{{ props.title }}</span>
    <RouterLink 
      v-for="link of props.links"
      :key="link.path"
      :to="link.path"
    >
      {{ link.title }}
    </RouterLink>
  </nav>
</template>

<style scoped>
nav {
    align-items: flex-start;
    display: flex;
    font-size: 12px;
    margin-top: 10px;
    text-align: center;
    width: 100%;
}

span {
  color: rgb(240, 248, 255);
}
img {
    margin-right: 5px;
}
span {
    margin-right: 10px;
}
a {
   margin-right: 5px; 
}
</style>