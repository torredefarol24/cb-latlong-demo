import { createConnection } from 'typeorm'

const connectToMYSQL = createConnection()
    .then(() => console.log("MYSQL Connection Successfull"))
    .catch(err => console.error("MYSQL Connection Error" + err))

export default connectToMYSQL