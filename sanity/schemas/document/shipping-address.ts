import { defineField } from "sanity";

const shippingAddress = {
  title: "Shipping Address",
  name: "shipping_address",
  type: "object",
  fields: [
    defineField({
      title: "Full Name",
      name: "full_name",
      type: "string",
    }),
    defineField({
      title: "address",
      name: "address",
      type: "string",
    }),
    defineField({
      title: "city",
      name: "city",
      type: "string",
    }),
    defineField({
      title: "Postal Code",
      name: "postal_code",
      type: "string",
    }),
    defineField({
      title: "country",
      name: "country",
      type: "string",
    }),
  ],
};

export default shippingAddress;
