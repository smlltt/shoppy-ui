import { loadStripe } from "@stripe/stripe-js";

const getStripe = async () => {
  const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);
  return stripe;
};

export default getStripe;
