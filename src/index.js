import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/schema.js';

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.listen(4003).then(() => console.log('Server is running!!'));
