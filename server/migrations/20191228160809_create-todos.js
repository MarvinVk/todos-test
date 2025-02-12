exports.up = function (knex) {
  return knex.schema.createTable("todos", function (table) {
    table.increments("id");
    table.integer("column_id");
    table.integer("order");
    table.string("title");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("todos");
};
