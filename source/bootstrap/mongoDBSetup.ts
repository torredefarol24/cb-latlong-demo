import mongoose from 'mongoose'
import mongo_connection_url from '../keys/mongo_connection_str'

const connectCallback = () => console.log("MongoDB Connection Successful")
const errorCallback = (err: any) => console.error("Mongo Connection Error " + err)
const connOpts = {
    useNewUrlParser: true,
    useCreateIndex: true,
}

const connectToMongoDB = mongoose.connect(mongo_connection_url, connOpts)
    .then(connectCallback)
    .catch(err => errorCallback(err))

export default connectToMongoDB