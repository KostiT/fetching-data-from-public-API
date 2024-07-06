<template>
  <div class="border relative rounded-lg my-8 p-8 text-center grid gap-8">
    <h3 class="text-base font-semibold leading-6 text-gray-900">Error</h3>
    <div class="mt-2">
      <p class="text-sm text-red-500">{{ message }}</p>
    </div>
    <div>
      <button
        type="button"
        @click.prevent="retry"
        class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Retry...
      </button>
    </div>
  </div>
</template>
<script setup>
defineProps({
  message: String,
  retry: Function
})
</script>
