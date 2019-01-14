import mongoose from 'mongoose'
import docker_mongo_connection_url from '../keys/mongo_connection_str'

const connectCallback = () => console.log("MongoDB Connection Successful")
const errorCallback = (err: any) => console.error("Mongo Connection Error " + err)
const connOpts = {
    useNewUrlParser: true
}

const connectToMongoDB = mongoose.connect(docker_mongo_connection_url, connOpts)
    .then(connectCallback)
    .catch(err => errorCallback(err))

export default connectToMongoDB