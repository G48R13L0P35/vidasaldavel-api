const knex = require('../database/knex');

async function checIsAdmin(req, res, next) {
    const { users_id } = req.params

    const user = await knex('users').where({ id: users_id }).first()

    if (!user) {
        return res.status(400).json('Usuário não encontrado')
    }
    if (user.isAdmin === 0) {
        return res.status(401).json('Voce não tem acesso a este recurso')
    }
    next()
}

module.exports = checIsAdmin;