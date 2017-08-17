import {Pool} from 'pg';
import config from '../config/database'

const pool = new Pool({
    user: config.username,
    host: config.host,
    database: config.database,
    password: config.password,
    port: config.port
});

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res);
    pool.end();
});

export default pool;