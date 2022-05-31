import { defineStore } from 'pinia'
import apolloClient from '../plugins/apollo'
import { sample, omit } from 'lodash'
import allTasks from '../graphql/allTasks.query.gql'
import createTask from '../graphql/createTask.mutation.gql'
import updateTask from '../graphql/updateTask.mutation.gql'
import deleteTask from '../graphql/deleteTask.mutation.gql'

import { uid } from 'uid'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    items: []
  }),
  getters: {
    item:
      ({ items }) =>
      (id) =>
        items.find((item) => item.id === id),
    completed: ({ items }) => items.filter(({ completed }) => completed),
    uncompleted: ({ items }) => items.filter(({ completed }) => !completed)
  },
  actions: {
    async fetchAll() {
      const { data } = await apolloClient.query({
        query: allTasks,
        fetchPolicy: 'no-cache'
      })
      this.items = data.allTasks
    },
    async create(input) {
      await apolloClient.mutate({
        mutation: createTask,
        variables: {
          input
        }
      })
      this.fetchAll()
    },
    async update(id, input) {
      await apolloClient.mutate({
        mutation: updateTask,
        variables: {
          id,
          input: omit(input, ['__typename', 'id', 'category'])
        }
      })
      this.fetchAll()
    },
    async delete(id) {
      await apolloClient.mutate({
        mutation: deleteTask,
        variables: {
          id
        }
      })
      this.fetchAll()
    }
  }
})
