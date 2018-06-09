
exports.up = (knex, Promise) => {
    return knex.schema.createTable('users', (table) => {
      table.increments('id').primary() // TODO: Remove once hash table is in
      table.string('_id') // TODO: make this a hash table
      table.string('name')
      table.string('age')
      table.string('gender')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('users')
  }