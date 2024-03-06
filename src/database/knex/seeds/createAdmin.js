require('dotenv/config')




exports.seed = async (knex) => {

      const name = process.env.USER_ADMIN
      const email = process.env.ADMIN_EMAIL
      const password = process.env.ADMIN_PASSWORD
      const isAdmin = true

  await knex('user').insert([
    {
      name,
      email,
      password,
      isAdmin
    },
  ]);
};
