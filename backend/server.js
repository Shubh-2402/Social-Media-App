import {ApolloServer,gql} from "apollo-server"
import mongoose from "mongoose"
import {} from "dotenv/config"

const typeDefs = gql`
    type Query{
        sayHi:String!
    }
`
const resolvers = {
    Query:{
        sayHi: ()=>"Hello World!!"
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

// DB Config
const connectionURL = `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.kcnua.mongodb.net/social-media?retryWrites=true&w=majority`
mongoose.connect(connectionURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


server.listen({port:5000})
    .then(({url})=>{
        console.log("Server running at "+url);
    })
