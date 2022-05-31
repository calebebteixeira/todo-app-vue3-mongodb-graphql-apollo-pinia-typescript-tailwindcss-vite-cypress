const { gql } = require('apollo-server')

module.exports = gql`
  type Query {
    # Task
    task(id: ID!): Task!
    allTasks: [Task!]!

    # Category
    category(id: ID!): Category!
    allCategories: [Category!]!
  }

  type Mutation {
    # Task
    createTask(input: createTaskInput!): Task!
    updateTask(id: ID!, input: updateTaskInput!): Task!
    deleteTask(id: ID!): Boolean!

    # Category
    createCategory(input: categoryInput!): Category!
    updateCategory(id: ID!, input: categoryInput!): Category!
    deleteCategory(id: ID!): Boolean!
  }

  # Category
  input categoryInput {
    name: String!
  }
  type Category {
    id: ID!
    name: String!
    banana: String
  }

  # Task
  input updateTaskInput {
    title: String
    description: String
    date: String
    completed: Boolean
    categoryId: String
  }
  input createTaskInput {
    title: String!
    description: String!
    date: String!
    completed: Boolean!
    categoryId: String!
  }
  type Task {
    id: ID!
    title: String!
    description: String!
    date: String!
    completed: Boolean!
    categoryId: String!
    category: String!
  }
`
