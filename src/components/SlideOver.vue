<template>
  <div class="relative z-10">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

    <div class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div class="pointer-events-auto relative w-screen max-w-md">
            <div class="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
              <button
                type="button"
                @click="$emit('close')"
                class="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white text-4xl"
              >
                <span class="absolute -inset-2.5" />
                &times;
              </button>
            </div>
            <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
              <div class="px-4 sm:px-6">
                <div class="text-base font-semibold leading-6 text-gray-900 py-4">
                  <slot name="title" />
                </div>
              </div>
              <div class="relative mt-6 flex-1 px-4 sm:px-6">
                <slot />
              </div>

              <slot name="footer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ title: String })
defineEmits(['close'])
</script>
