<template>
  <div class="my-8 flex justify-between items-center">
    <h2 class="font-semibold text-gray-800 leading-tight flex items-center uppercase">
      Clients ({{ store.clientsCount }})
    </h2>
    <div class="flex items-center space-x-2">
      <input
        type="search"
        placeholder="Search..."
        v-model="store.filter.name"
        class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm py-1 w-full"
      />
    </div>
  </div>

  <SlideOver v-if="clientInvoice" @close="clientInvoice = null">
    <template #title>Invoice for {{ clientInvoice.name }}</template>

    <CreateInvoice :company="clientInvoice.company.name" v-model="form" />

    <template #footer>
      <div class="bg-gray-100 px-4 py-5 flex justify-between items-center">
        <div class="text-xl">${{ (form.hourlyRate * form.numberOfHours).toFixed(2) }}</div>

        <div class="flex gap-4">
          <button
            type="button"
            class="inline-flex justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-500"
          >
            Create
          </button>
          <button
            type="button"
            @click.prevent="clientInvoice = null"
            class="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </template>
  </SlideOver>

  <ApiLoading v-if="store.storeState.isLoading" />

  <ApiError
    :message="store.storeState.message"
    :retry="store.getClients"
    v-else-if="store.storeState.isError"
  />

  <template v-else-if="store.storeState.isReady">
    <div class="bg-white overflow-hidden rounded-lg border border-gray-300">
      <div class="overflow-x-auto">
        <table class="table-auto w-full text-left">
          <thead class="text-gray-600 border-b bg-gray-50">
            <tr>
              <th class="p-3 text-sm">Name</th>
              <th class="p-3 text-sm">Email</th>
              <th class="p-3 text-sm">Company</th>
              <th class="p-3 text-sm">Actions</th>
            </tr>
          </thead>
          <tbody class="text-sm divide-y divide-gray-200">
            <tr v-for="client in store.filteredClients" :key="client.name">
              <td class="p-3">
                <div class="font-medium text-gray-800">{{ client.name }}</div>
              </td>
              <td class="p-3">
                <span class="bg-indigo-100 text-indigo-800 mr-2 px-2.5 py-0.5 rounded">
                  {{ client.email }}
                </span>
              </td>
              <td class="p-3 space-x-2">{{ client.company.name }}</td>

              <td class="p-3 space-x-2">
                <button class="text-blue-500 font-semibold" @click.prevent="clientInvoice = client">
                  Create Invoice
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'
import { clientsList } from '../stores/apiStore.js'

import ApiError from '../components/ApiError.vue'
import SlideOver from '../components/SlideOver.vue'
import ApiLoading from '../components/ApiLoading.vue'
import CreateInvoice from '../components/CreateInvoice.vue'

const store = clientsList()

const clientInvoice = ref(null)

const form = reactive({
  project: '',
  hourlyRate: 0,
  numberOfHours: 0
})

onMounted(() => store.getClients())
</script>
