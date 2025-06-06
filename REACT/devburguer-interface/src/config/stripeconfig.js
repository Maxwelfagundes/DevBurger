import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51RQa3JRxGT4R8q1BVAaGVv4uFsVNnPqvrDKddXpoDhJSd1XLxDboVZozsxjW2LESnAfkjgJW0XdV7SueArMAINNw00Yg1b4uPH',
);

export default stripePromise;
