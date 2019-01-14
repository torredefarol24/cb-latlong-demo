import { createConnection } from 'typeorm'

const connectCallback = () => console.log("MYSQL Connection Successful")
const errorCallback = (err: any) => console.error(`MYSQL Connection Error ${err}`)

const connectToMYSQL = createConnection()
    .then(connectCallback)
    .catch(err => errorCallback(err))

export default connectToMYSQL