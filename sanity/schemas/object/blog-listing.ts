import { defineField, defineType } from "sanity";

export const blogListingModule = defineType({
  type: "object",
  name: "blog_listing",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "subheading",
      type: "string",
    }),
  ],
});
