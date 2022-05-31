const { model, Schema } = require('mongoose')

const schema = new Schema({
  title: String,
  description: String,
  date: String,
  completed: Boolean,
  categoryId: String
})

module.exports = model('Task', schema)
