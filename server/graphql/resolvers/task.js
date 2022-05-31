const Task = require('../../models/Task')
const Category = require('../../models/Category')

module.exports = {
  Mutation: {
    async createTask(_, { input }) {
      // check for category first
      await Category.findById(input.categoryId)
      // create task
      const newTask = new Task(input)
      const { id, _doc } = await newTask.save()
      return {
        id,
        ..._doc
      }
    },
    async updateTask(_, { id, input }) {
      // if category was provided check for its existence
      if (typeof input.categoryId !== 'undefined') {
        await Category.findById(input.categoryId)
      }
      // update task
      return await Task.findByIdAndUpdate(id, input, {
        returnNewDocument: true
      })
    },
    async deleteTask(_, { id }) {
      await Task.findByIdAndDelete(id)
      return true
    }
  },
  Query: {
    task: async (_, { id }) => await Task.findById(id),
    allTasks: async () => await Task.find({})
  },
  Task: {
    category: async ({ categoryId }) => {
      const { name } = await Category.findById(categoryId)
      return name
    }
  }
}
