import { gql } from 'apollo-server';

const rootTypeDefs = gql`
	type Query {
		hello: String
		nullable: Boolean!
		strings: [String]
		user: User
		users: [User!]!
	}
	type User {
		id: ID!
		username: String!
	}
`;

const rootResolvers = {
	Query: {
		hello: () => 'Hello',
		nullable: () => false,
		strings: () => ['string1', 'string2'],
		user: () => {
			return {
				id: 'sadfa8s6f7a6f',
				username: 'brunocarvalho',
			};
		},
		users: () => {
			return [
				{
					id: 'sadfa8s6f7a6f',
					username: 'brunocarvalho',
				},
				{
					id: 'sadfa8s6f7a6f',
					username: 'bruno',
				},
			];
		},
	},
};

export const typeDefs = [rootTypeDefs];
export const resolvers = [rootResolvers];
