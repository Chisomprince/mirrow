import { BasketIcon, ControlsIcon, TagIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";
import { GenerateVariants } from "../../components/Generate-variants";

export const productType = defineType({
  name: "product",
  title: "Products",
  type: "document",
  icon: BasketIcon,
  groups: [
    {
      name: "product",
      title: "Product Information",
    },
    {
      name: "media",
      title: "Media",
    },
    {
      name: "inventory",
      title: "Inventory",
    },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      group: "product",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "product",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "image",
      title: "Cover Image",
      type: "image",
      group: "media",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "imageGallery",
      title: "Image Gallery",
      group: "media",
      type: "array",
      options: {
        layout: "grid",
      },
      of: [
        defineArrayMember({
          name: "image",
          title: "Images",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      title: "Collection",
      description: "Select a clollection where the products will come from",
      name: "collection",
      type: "array",
      of: [{ type: "reference", to: { type: "collection" } }],
    }),
    defineField({
      name: "price",
      title: "Price",
      group: "product",
      description:
        "Value is in smallest fractional unit, ie cents (500 = $5.00)",
      type: "number",
    }),
    defineField({
      title: "SKU",
      name: "sku",
      type: "string",
      group: "inventory",
    }),
    defineField({
      name: "description",
      title: "Description",
      group: "product",
      type: "block_content",
    }),

    defineField({
      title: "Sale Price",
      name: "sale_price",
      type: "number",
      group: "product",

      hidden: ({ document }) => !document.on_sale,
    }),
    defineField({
      title: "On Sale?",
      name: "on_sale",
      group: "product",
      type: "boolean",
    }),
    defineField({
      name: "count_in_stock",
      title: "Count In Stock",
      type: "number",
      group: "inventory",
    }),
    defineField({
      name: "options",
      title: "Options",
      type: "array",
      group: "inventory",
      of: [
        defineArrayMember({
          name: "option",
          title: "Option",
          type: "object",
          fields: [
            defineField({
              name: "name",
              description: "Size, colour, etc.",
              title: "Option Name",
              type: "string",
            }),
            defineField({
              name: "values",
              title: "Option Values",
              type: "array",
              of: [
                defineArrayMember({
                  name: "value",
                  title: "Value",
                  type: "string",
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "values",
            },
            prepare(selection) {
              const { title, subtitle } = selection;
              // Join the values array into a comma-separated string
              const valuesString = Array.isArray(subtitle)
                ? subtitle.join(", ")
                : "";
              return {
                title: title,
                subtitle: valuesString,
                icon: ControlsIcon,
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: "variants",
      title: "Variants",
      group: "inventory",
      type: "array",
      components: { input: GenerateVariants },
      of: [
        defineArrayMember({
          name: "variant",
          title: "Variant",
          type: "object",
          fields: [
            defineField({
              name: "variantName",
              title: "Variant Name",
              type: "string",
            }),
            defineField({
              name: "options",
              title: "Variant Options",
              description:
                "Avoid editing these directly. They are generated from the product options. If you need to change them, edit the product options instead and generate a new set.",
              type: "array",
              of: [
                defineArrayMember({
                  name: "option",
                  title: "Option",
                  type: "object",
                  fields: [
                    defineField({
                      name: "name",
                      title: "Name",
                      type: "string",
                    }),
                    defineField({
                      name: "value",
                      title: "Value",
                      type: "string",
                    }),
                  ],
                  preview: {
                    select: {
                      title: "name",
                      subtitle: "value",
                    },
                    prepare(selection) {
                      const { title, subtitle } = selection;
                      return {
                        title: `${title}: ${subtitle}`,
                        icon: ControlsIcon,
                      };
                    },
                  },
                }),
              ],
            }),
            defineField({
              name: "quantity",
              title: "Stock",
              description:
                "Set the quantity of available stock for this variant",
              type: "number",
              initialValue: 0,
            }),
          ],
          preview: {
            select: {
              title: "variantName",
              subtitle: "quantity",
            },
            prepare(selection) {
              const { title, subtitle } = selection;
              return {
                title: title,
                subtitle:
                  subtitle !== null ? `Stock: ${subtitle}` : "No stock info",
                icon: TagIcon,
              };
            },
          },
        }),
      ],
    }),
  ],
});
