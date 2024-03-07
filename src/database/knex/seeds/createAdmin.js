require('dotenv/config')

exports.seed = async (knex) => {

  await knex('users').insert(
    {
      name: process.env.USER_ADMIN,
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      isAdmin: true
    }
  );
};
