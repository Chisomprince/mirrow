import { defineField } from "sanity";

const orderItem = {
  title: "Order Item",
  name: "orderItem",
  type: "object",
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
    }),
    defineField({
      title: "quantity",
      name: "quantity",
      type: "number",
    }),
    defineField({
      title: "image",
      name: "image",
      type: "string",
    }),
    defineField({
      title: "price",
      name: "price",
      type: "number",
    }),
  ],
};
export default orderItem;
