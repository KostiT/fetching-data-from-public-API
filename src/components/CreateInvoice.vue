<template>
  <div class="flex flex-1 flex-col justify-between">
    <div class="divide-y divide-gray-200">
      <div class="space-y-6 pb-4 pt-5">
        <div>
          <label for="company-name" class="font-semibold text-gray-800">Company</label>
          <div class="mt-2">
            <input
              disabled
              readonly
              type="text"
              id="company-name"
              :value="company"
              class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md py-1 w-full"
            />
          </div>
        </div>
        <div>
          <label for="project-name" class="font-semibold text-gray-800">Project name</label>
          <div class="mt-2">
            <input
              type="text"
              id="project-name"
              v-model="form.project"
              placeholder="Project..."
              class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md py-1 w-full"
            />
          </div>
        </div>
        <div>
          <label for="description" class="font-semibold text-gray-800">Description</label>
          <div class="mt-2">
            <textarea
              rows="4"
              id="description"
              name="description"
              placeholder="Description..."
              class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md py-1 w-full"
            ></textarea>
          </div>
        </div>
        <div>
          <label class="font-semibold text-gray-800">Number of Hours</label>
          <div class="mt-2 space-y-4">
            <input
              min="1"
              type="number"
              placeholder="Hours..."
              v-model="form.numberOfHours"
              class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md py-1 w-full"
            />
          </div>
        </div>
        <div>
          <label class="font-semibold text-gray-800">Hourly Rate</label>
          <div class="mt-2 space-y-4">
            <input
              min="1"
              step=".10"
              type="number"
              v-model="form.hourlyRate"
              placeholder="Hourly Rate..."
              class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md py-1 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps(['modelValue', 'company'])
const emit = defineEmits(['update:modelValue'])

const form = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  }
})
</script>
