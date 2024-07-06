<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <AppHeader />

  <div class="mx-auto max-w-7xl p-6">
    <RouterView />
  </div>
</template>
