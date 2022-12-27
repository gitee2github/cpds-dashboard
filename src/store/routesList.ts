import { defineStore } from 'pinia'
import { RoutesListState } from './interface'

// Routing List
export const useRoutesList = defineStore('routesList', {
  state: (): RoutesListState => ({
    routesList: [],
    isColumnsMenuHover: false,
    isColumnsNavHover: false
  }),
  actions: {
    async setRoutesList(data: Array<string>) {
      this.routesList = data
    },
    async setColumnsMenuHover(bool: Boolean) {
      this.isColumnsMenuHover = bool
    },
    async setColumnsNavHover(bool: Boolean) {
      this.isColumnsNavHover = bool
    }
  }
})
