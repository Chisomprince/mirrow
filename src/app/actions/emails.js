"use server";

import { ContactEmailTemplate } from "@/email-template/contact";
import client from "@/sanity/sanity.client";
import { Resend } from "resend";
const resend = new Resend(process.env.NEXT_RESEND_KEY);

export const sendContactMessage = async (formData = {}) => {
  await client.create({
    _type: "contact",
    ...formData,
  });

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "support@fortniteconsultinggroup.org",
    subject: formData.subject || `Contact message from ${formData.name}`,
    react: ContactEmailTemplate(formData),
  });

  if (error) {
    throw new Error("unable to send contact message");
  }
};

export const sendDonationMessage = async (formData = {}) => {
  const { data, error } = await resend.emails.send({
    from: "lobelyfoundation",
    to: "support@fortniteconsultinggroup.org",
    subject: formData.subject || `Donation from ${formData.name}`,
    react: ContactEmailTemplate(formData),
  });

  if (error) {
    throw new Error("unable to send contact message");
  }
};
