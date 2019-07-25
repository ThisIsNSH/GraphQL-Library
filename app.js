const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://Nishant:nishant123@ds045531.mlab.com:45531/graphql', {useNewUrlParser: true})
mongoose.connection.once('open', () => {
    console.log('connect to database');
});

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(3000, ()=> {
})