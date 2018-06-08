module.exports = {
    development: {
      client: 'pg',
      connection: {
        filename: './dev.postgresql'
      },
      migrations: {
          directory: './server/migrations'
      },
      seeds: {
          directory: './server/seeds'
      },
      useNullAsDefault: true
    },
  
    test: {
      client: 'pg',
      connection: {
        filename: ':memory:'
      },
      useNullAsDefault: true
    },
  
    production: {
      client: 'pg',
      connection: {
        database: 'my_db',
        user: 'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  }