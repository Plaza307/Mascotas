import mysql from 'promise-mysql';
import connection from './connection';

const pool = mysql.createPool(connection.database);

pool.getConnection().then(conn => {
    pool.releaseConnection(conn);
    console.log("Nos hemos conectado");
})

export default pool;