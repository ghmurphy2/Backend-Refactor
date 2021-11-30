const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

// required paths: one user query, login mutation, create user mutation

const resolvers = {
    // single user query
    Query: {
        me:async (parents, args, context) => {
            if (context.user){
                const userData = await User.findOne({ _id: context.user._id})
                .select('-_v -password')
                return userData;
            }
            throw new AuthenticationError('Please login.')
        }
    },
    Mutation: {
        login: async (parent, {email, password}) => {
            // check email
            const user = await User.findOne({email});
            if (!user) {
                throw new AuthenticationError('Incorrect email')
            }
            // check password
            const correctPassword = await user.isCorrectPassword(password)

            if (!correctPassword) {
                throw new AuthenticationError('Incorrect password.')
            }
            // asign token
            const token = signToken(user);
            return {token, user}
        },
        // create user
        addUser: async (parents, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user};
        }
    }
    saveBook: async (parent, {input}, context) => {
        // require login
        if (context.user)
    }


}