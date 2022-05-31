const { model, Schema } = require('mongoose')

const schema = new Schema({
  name: String
})

module.exports = model('Category', schema)
