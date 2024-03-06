const { pool } = require('../../')
const createTables = require('./createTables')


async function migrationRun() {
    const schema = [createTables].join('')
    const tableName = `user`;

    const verifyIfTableExists = `
    SHOW TABLES LIKE '${tableName}';
    `

    pool.execute(verifyIfTableExists, (err, results) => {
        if (err) {
            console.error('Erro ao verificar a existencia da tabela', err)
            pool.end()
            return;
        }
        if(results.length === 0) {
            pool.execute(schema, (err) => {
                if (err) {
                    console.error('Erro ao criar a tabela', err)
                } else {
                    console.log('Tabela criada com sucesso!')
                }
                pool.end()
            })
        }
    })
}

module.exports = migrationRun