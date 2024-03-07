exports.up = function(knex) {
    return knex.schema.createTable('post', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('text');
        table.timestamp('created_at').defaultTo(knex.fn.now());        
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('post') 
};
