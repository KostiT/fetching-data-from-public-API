<template>
  <header class="bg-white">
    <nav aria-label="Global" class="mx-auto flex max-w-7xl items-center justify-between p-6">
      <div class="flex lg:flex-1">
        <RouterLink to="/" class="-m-1.5 p-1.5 text-xl font-bold">SolidComp</RouterLink>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          @click.prevent="mobileMenuOpen = !mobileMenuOpen"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          {{ mobileMenuOpen ? '&times;' : '☰' }}
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <RouterLink
          :key="item.name"
          :to="item.href"
          v-for="item in menuItems"
          class="text-base leading-6 text-gray-900"
          >{{ item.name }}</RouterLink
        >
      </div>
    </nav>

    <div class="lg:hidden px-6" role="dialog" aria-modal="true">
      <div class="mb-6 flow-root" v-show="mobileMenuOpen">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            <RouterLink
              :key="item.name"
              :to="item.href"
              v-for="item in menuItems"
              class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
              >{{ item.name }}</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuItems = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Clients',
    href: '/clients'
  }
]

const mobileMenuOpen = ref(false)
</script>
