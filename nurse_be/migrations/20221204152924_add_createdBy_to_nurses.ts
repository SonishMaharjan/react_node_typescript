import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table("nurses", (table) => {
    table.integer("userId");
    table.foreign("userId").references("users");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.table("nurses", (table) => {
    table.dropColumn("createdBy");
  });
}
