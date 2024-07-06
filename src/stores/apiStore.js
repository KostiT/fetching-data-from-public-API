import axios from 'axios'
import { defineStore } from 'pinia'

// no enums :/
export class State {
  constructor(value, message = null) {
    this.value = value
    this.message = message
  }

  get isError() {
    return this.value === 'error'
  }

  get isLoading() {
    return this.value === 'loading'
  }

  get isReady() {
    return this.value === 'ready'
  }
}

export const clientsList = defineStore('clientsList', {
  state: () => ({
    clients: [],
    filter: {
      name: null
    },
    storeState: new State('loading')
  }),
  actions: {
    getClients() {
      const api = 'https://jsonplaceholder.typicode.com/users'

      this.storeState = new State('loading')

      axios
        .get(api)
        .then(({ data }) => {
          this.clients = data
          this.storeState = new State('ready')
        })
        .catch((error) => {
          // console.log(error)
          this.storeState = new State('error', error.toString())
        })
    }
  },
  getters: {
    clientsCount(state) {
      return state.filteredClients?.length ?? 0
    },
    filteredClients(state) {
      if (state.filter.name) {
        const name = state.filter.name.toLowerCase()
        return state.clients.filter((client) => client.name.toLowerCase().includes(name))
      }
      return state.clients
    }
  }
})
