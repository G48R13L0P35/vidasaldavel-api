const knex = require('../database/knex');

class PostController {

    async create(req, res) {
        const { name, email, text } = req.body;

        await knex('post').insert({
            name,
            email,
            text
        });
        return res.status(201).json('post criado com sucesso');
    }

    async listPosts(req, res) {
        const posts = await knex('post');
        return res.json(posts);
    }

    async deletePost(req, res) {
        const { id } = req.params;
        await knex('post').where({id}).delete();
        return res.status(200).json('post deletado com sucesso');
    }

    async updatePost(req, res) {
        const { id } = req.params;
        const { name, email, text } = req.body;
        await knex('post').where({id}).update({
            name,
            email,
            text
        });
        return res.status(200).json('post atualizado com sucesso');
    }
}

module.exports = PostController;