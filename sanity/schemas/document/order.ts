import { defineField } from "sanity";

const order = {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    defineField({
      title: "User",
      name: "user",
      type: "reference",
      to: [{ type: "user" }],
      options: {
        disableNew: true,
      },
    }),
    defineField({
      name: "user_name",
      title: "User Name",
      type: "string",
    }),
    defineField({
      name: "items_price",
      title: "Items Price",
      type: "number",
    }),
    defineField({
      name: "Shipping Price",
      title: "shipping_price",
      type: "number",
    }),
    defineField({
      name: "tax_price",
      title: "Tax Price",
      type: "number",
    }),
    defineField({
      name: "total_price",
      title: "Total Price",
      type: "number",
    }),
    defineField({
      name: "payment_method",
      title: "Payment Method",
      type: "string",
    }),
    defineField({
      title: "Shipping Address",
      name: "shipping_address",
      type: "shipping_address",
    }),
    defineField({
      title: "payment_result",
      name: "paymentResult",
      type: "payment_result",
    }),
    defineField({
      title: "Order Items",
      name: "order_items",
      type: "array",
      of: [
        {
          title: "Order Item",
          type: "orderItem",
        },
      ],
    }),
    defineField({
      title: "Is Paid",
      name: "is_paid",
      type: "boolean",
    }),
    defineField({
      title: "Paid Date",
      name: "paid_at",
      type: "datetime",
    }),
    defineField({
      title: "Is Delivered",
      name: "is_delivered",
      type: "boolean",
    }),
    defineField({
      title: "Delivered At",
      name: "delivered_at",
      type: "datetime",
    }),
    defineField({
      title: "Created At",
      name: "created_at",
      type: "datetime",
    }),
  ],
};

export default order;
