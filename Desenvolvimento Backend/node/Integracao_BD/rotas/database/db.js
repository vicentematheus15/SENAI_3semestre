import pg from 'pg';
const {Pool} = pg;

const pool = new Pool({
    host: '',
    port: '',
    user: '',
    password: '',
    database: ''
});

export default pool;