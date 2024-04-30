import { defineField } from "sanity";

const paymentResult = {
  title: "Payment Result",
  name: "payment_result",
  type: "object",
  fields: [
    defineField({
      title: "id",
      name: "id",
      type: "string",
    }),
    defineField({
      title: "status",
      name: "status",
      type: "string",
    }),
    defineField({
      title: "email_address",
      name: "email_address",
      type: "string",
    }),
  ],
};
export default paymentResult;
