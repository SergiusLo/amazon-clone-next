const stripe = require("stripe")(
  "sk_test_51MQFfoAEfILJ7IL6ia8lPwk6NxTo80k0sHimOQIRnYHmyqGosdMA3fcr5OHrKJZCf0Ea07Cpf0vDg1b1Hs8KR3f800jtOwWCzc"
);

export default async (req, res) => {
  const { items, email } = req.body;

  const transformedItems = items.map((item) => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: "gbp",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));

  const session = await stripe.checkout.session.create({
    payment_method_types: ["card"],
    shipping_rates: ["shr_1MQxA3AEfILJ7IL6zva96fC6"],
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "CA"],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.NEXTAUTH_URL}/success`,
    cancel_url: `${process.env.NEXTAUTH_URL}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });
  res.status(200).json({ id: session.id });
};
