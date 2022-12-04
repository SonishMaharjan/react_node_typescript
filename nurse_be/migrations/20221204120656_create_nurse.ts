import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("nurses", function (table) {
    table.increments().primary();
    table.string("name", 255).notNullable();
    table.string("email", 255).notNullable().unique();
    table.string("contact", 20);
    table.json("weekdays");
    table.time("startTime");
    table.time("endTime");
    table.string("image", 1024);
    table.boolean("isRoundingManager").defaultTo(false);
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("nurses");
}
