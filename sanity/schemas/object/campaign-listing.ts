import { defineField, defineType } from "sanity";

export const campaignsListingModule = defineType({
  type: "object",
  name: "campaigns_listing",
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
      name: "mode",
      title: "Display Mode",
      type: "string",
      options: {
        list: [
          { title: "Slide", value: "slide" },
          { title: "Grid", value: "grid" },
        ],
        layout: "dropdown",
      },
    }),
  ],
});
