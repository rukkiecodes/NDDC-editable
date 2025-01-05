// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore("app", {
  state: () => ({
    viewProject: null,
  }),

  actions: {
    setViewProject (props) {
      this.viewProject = props
      console.log(props)
    }
  }
});
