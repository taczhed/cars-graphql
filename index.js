const express = require('express')
const dotenv = require('dotenv')
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

dotenv.config()
const app = express()
const port = process.env.PORT

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});