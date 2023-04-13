<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="main">
    <RouterView />
  </div>
</template>

<style scoped>
.main {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  align: center;
}
</style>
