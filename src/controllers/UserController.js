const knex = require('../database/knex');
const bcrypt = require('bcryptjs');

class UserContoller {

    async create(req, res) {
        const { name, email, password } = req.body;

        const isAdmin = false

        const hashedPassword = await bcrypt.hash(password, 8);

        await knex('users').insert({
            name,
            email,
            password: hashedPassword,
            isAdmin
        })
        return res.status(201).json('Usuario criado com sucesso');
    }
    /* async login(req, res) {
        const { email, password } = req.body;
        const user = await knex('user').where('email', email).first();
        if (!user) {
            return res.status(400).json('Usuário não encontrado');
        }
        const passwordIsValid = await bcrypt.compare(password, user.password);
        if (!passwordIsValid) {
            return res.status(400).json('Senha inválida');
        }
        return res.status(200).json(user);
    } */

    async listUsers (req, res) {
        const users = await knex('users');
        return res.status(200).json(users);
    }

    async deleteUser(req, res) {
        const { id } = req.params;
        await knex('users').where({id}).delete();
        return res.status(200).json('Usuário deletado com sucesso');
    }

    async updateUser(req, res) {
        const { id } = req.params;
        const { name, email, password } = req.body;

        if (password) {
            const hashedPassword = await bcrypt.hash(password, 8);

            await knex('users').where({id}).update({
                name,
                email,  
                password: hashedPassword
            })
            return res.status(200).json(hashedPassword);
        } else {
            await knex('users').where({id}).update({
                name,
                email,
                password
            })
            return res.status(200).json(password);
        }
    }
        
}

module.exports = UserContoller