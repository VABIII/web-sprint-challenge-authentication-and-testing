
exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'Natalea', password: '1234'},
        {id: 2, username: 'Micah', password: '1234'},
        {id: 3, username: 'Meg', password: '1234'}
      ]);
    });
};
