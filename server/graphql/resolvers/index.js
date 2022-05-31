const task = require('./task')
const category = require('./category')

module.exports = {
  Query: {
    ...task.Query,
    ...category.Query
  },
  Mutation: {
    ...task.Mutation,
    ...category.Mutation
  },
  Task: task.Task
}
