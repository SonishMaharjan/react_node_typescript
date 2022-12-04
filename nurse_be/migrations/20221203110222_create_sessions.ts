import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("sessions", function (table) {
    table.increments().primary();
    table.string("userAgent", 255);
    table.boolean("isValid");
    table.integer("user_id");
    table.foreign("user_id").references("users.id");
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("sessions");
}
