exports.up = async function (knex) {
  await knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments("project_id");
      tbl.string("project_name", 25).notNullable();
      tbl.string("project_description");
      tbl.boolean("project_completed").defaultTo("FALSE");
    })
    .createTable("resources", (tbl) => {
      tbl.increments("resource_id");
      tbl.string("resource_name", 25).notNullable().unique();
      tbl.string("resource_description", 100);
    })
    .createTable("tasks", (tbl) => {
      tbl.increments("task_id");
      tbl.string("task_description").notNullable();
      tbl.string("task_notes");
      tbl.boolean("task_completed").defaultTo("FALSE");
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    });
  // .createTable("project_resources", (tbl) => {
  //   tbl.increments("project_resource_id");
  //   tbl
  //     .integer("project_id")
  //     .unsigned()
  //     .notNullable()
  //     .references("project_id")
  //     .inTable("projects")
  //     .onDelete("RESTRICT")
  //     .onUpdate("RESTRICT");

  //   tbl
  //     .integer("resource_id")
  //     .unsigned()
  //     .notNullable()
  //     .references("resource_id")
  //     .inTable("resources")
  //     .onDelete("RESTRICT");
  // });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
