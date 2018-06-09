module.exports = {
  development: {
    client: 'sqlite',
    connection: {
      filename: './dev.sqlite',
      database: 'my_db',
      user: 'username',
      password: 'password'
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