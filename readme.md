### Lat Long Sorting MicroService

To Check This,

- Provide Database Connection Info

```sh
$ cd cb-latlong-demo
$ touch source/keys/mongo_connection_str.ts

# Update source/keys/mongo_connection_str.ts
const mongo_connection_str = <YOUR_MONGO_CONNECTION_URL>
export default mongo_connection_str

$ touch source/keys/mysql_connection_vals.js

# Update source/keys/mysql_connection_vals.js
module.exports = {
    DB_HOST: <YOUR_MYSQL_DBHOST>,
    DB_USER: <YOUR_MYSQL_DBUSER>,
    DB_PASS: <YOUR_MYSQL_DBPASS>,
    DB_NAME: <YOUR_MYSQL_DBNAME>,
    DB_PORT: <YOUR_MYSQL_DBPORT>
}
```

- Install Dependencies
```sh
$ cd cb-latlong-demo
$ yarn install
```

- Run App (Dev Mode)
```sh
$ yarn watch-ts
$ yarn watch-js
```

- Run App (Prod Mode)
```sh
$ yarn build
$ yarn start
```