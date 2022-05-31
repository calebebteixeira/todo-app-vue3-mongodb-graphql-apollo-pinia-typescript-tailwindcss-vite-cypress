const Category = require('../../models/Category')

module.exports = {
  Mutation: {
    async createCategory(_, { input }) {
      const newCategory = new Category(input)
      const { id, _doc } = await newCategory.save()
      return {
        id,
        ..._doc
      }
    },
    async updateCategory(_, { id, input }) {
      return await Category.findByIdAndUpdate(id, input, {
        returnNewDocument: true
      })
    },
    async deleteCategory(_, { id }) {
      await Category.findByIdAndDelete(id)
      return true
    }
  },
  Query: {
    category: async (_, { id }) => await Category.findById(id),
    allCategories: async () => await Category.find({})
  }
}
