// ./schemas/heroType.ts

import { defineField, defineType } from "sanity";

export const productModule = defineType({
  name: "products",
  type: "object",
  description: "List of some products from a collection",
  title: "Products List",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "subheading",
      type: "string",
    }),
    defineField({
      title: "Collection",
      description: "Select a clollection where the products will come from",
      name: "collection",
      type: "reference",
      to: [{ type: "collection" }],
    }),
  ],
});
