import { defineStore } from 'pinia'
import apolloClient from '../plugins/apollo'
import allCategories from '../graphql/allCategories.query.gql'
import createCategory from '../graphql/createCategory.mutation.gql'
import updateCategory from '../graphql/updateCategory.mutation.gql'
import deleteCategory from '../graphql/deleteCategory.mutation.gql'

export const useCategoryStore = defineStore('categories', {
  state: () => ({
    items: []
  }),
  getters: {
    item:
      ({ items }) =>
      (id) =>
        items.find((item) => item.id === id)
  },
  actions: {
    async fetchAll() {
      const { data } = await apolloClient.query({
        query: allCategories,
        fetchPolicy: 'no-cache'
      })
      this.items = data.allCategories
    },
    async create(input) {
      await apolloClient.mutate({
        mutation: createCategory,
        variables: {
          input
        }
      })
      this.fetchAll()
    },
    async update(id, input) {
      await apolloClient.mutate({
        mutation: updateCategory,
        variables: {
          id,
          input: omit(input, ['__typename', 'id'])
        }
      })
      this.fetchAll()
    },
    async delete(id) {
      await apolloClient.mutate({
        mutation: deleteCategory,
        variables: {
          id
        }
      })
      this.fetchAll()
    }
  }
})
