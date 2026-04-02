import pg from 'pg';
const {Pool} = pg;

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'matheusVicente',
    password: '123',
    database: 'clinica'
});

export default pool;