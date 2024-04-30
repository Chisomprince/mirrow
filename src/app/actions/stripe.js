"use server";

import { calculateDonationAmount } from "@/lib/stripe";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_API_KEY);

// Managing stripe subscriptions for a user
export async function createCheckoutSession(rawInput) {
  const { email, amount, full_name, mode } = rawInput;

  const { total, fee } = calculateDonationAmount(amount);
  const headersList = headers();
  const BaseURL = headersList.get("origin");

  const stripeSession = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    submit_type: "donate",
    payment_method_types: ["card", "paypal"],
    mode: mode === "reoccurring" ? "subscription" : "payment",
    billing_address_collection: "auto",
    customer_email: email,
    // success_url: `${BaseURL}/payments/?success=true`,
    // cancel_url: `${BaseURL}/payments/?canceled=true`,
    // automatic_tax: { enabled: true },
    return_url: `${BaseURL}/payment?session_id={CHECKOUT_SESSION_ID}`,
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          product_data: {
            name: "Donation Campaign",
            images: [
              "https://cdn.sanity.io/images/dq4m37u0/production/8e8a2b7ec02d79eaa173bdce8d42fc74b471d2de-870x610.jpg",
            ],
          },
          unit_amount: total,
        },
      },
    ],
    metadata: {
      email: email,
      full_name: full_name,
    },
  });

  revalidatePath("/");

  return {
    url: stripeSession.url,
    id: stripeSession.id,
    client_secret: stripeSession.client_secret,
  };
}

export async function retrieveCheckoutSession(session_id) {
  const session = await stripe.checkout.sessions.retrieve(session_id);
  // console.log("session", session);
  return {
    amount_total: session.amount_total / 100,
    status: session.status,
    customer_email: session.customer_details.email,
    metadata: session.metadata,
  };
}
