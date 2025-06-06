import Stripe from 'stripe';
import * as Yup from 'yup';
import 'dotenv/config';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-08-16',
});

const calculateOrderAmount = (items) => {
  const total = items.reduce(
    (acc, current) => current.price * current.quantity + acc,
    0,
  );
  return total;
};

class CreatePaymentIntentController {
  async store(request, response) {
    const schema = Yup.object().shape({
      products: Yup.array()
        .of(
          Yup.object().shape({
            id: Yup.number().required(),
            quantity: Yup.number().required(),
            price: Yup.number().required(),
          }),
        )
        .required(),
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (err) {
      console.error('Erro de validação:', err);
      return response.status(400).json({ error: err.errors });
    }

    const { products } = request.body;

    try {
      const amount = calculateOrderAmount(products);

      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'brl', // ajuste para sua moeda
        automatic_payment_methods: {
          enabled: true,
        },
      });

      return response.json({
        clientSecret: paymentIntent.client_secret,
        checkoutLink: `https://dashboard.stripe.com/test/payments/${paymentIntent.id}`,
      });
    } catch (err) {
      console.error('Erro no Stripe:', err);
      return response
        .status(500)
        .json({ error: 'Erro ao criar pagamento com Stripe' });
    }
  }
}

export default new CreatePaymentIntentController();
