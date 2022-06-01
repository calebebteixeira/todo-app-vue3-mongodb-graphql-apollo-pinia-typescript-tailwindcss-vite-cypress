const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const PORT = 8080
const MONGODB =
  'mongodb+srv://calebebteixeira:oasmpHgmYNRWZ6Ar@apolloserversetup.4ca4c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
})

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB connected')
    return server.listen({ port: PORT })
  })
  .then(({ url }) => {
    console.log(`Server running at ${url}`)
  })

// mongoose.connect(MONGODB, { useNewUrlParser: true })
// export default server.createHandler()
