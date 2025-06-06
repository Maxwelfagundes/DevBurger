import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';
import CheckoutForm from '../../components/Stripe/CheckoutForm';
import stripePromise from '../../config/stripeconfig';

export function Checkout() {
  const location = useLocation();
  const clientSecret = location?.state?.clientSecret;

  if (!clientSecret) {
    return <div>Erro, volte e tente novamente</div>;
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
}
