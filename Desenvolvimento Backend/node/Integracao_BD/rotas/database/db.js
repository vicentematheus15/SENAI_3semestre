import pg from 'pg';

const {Pool} = pg;

const pool = new Pool({
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE_DB
});

export default pool;