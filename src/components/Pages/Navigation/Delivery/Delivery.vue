<template>
  <section class="delivery">
    <h2 class="title">Delivery and payment</h2>
    <p>
      Dear customer! To make an order on our website you should follow several
      simple steps.
    </p>
    <div class="wrapper">
      <h2>1. REGISTRATION</h2>
      <p>
        We kindly ask you to log on or register if you are making your order for
        the first time. The appropriate button is in the right upper corner of
        the website page.
      </p>
    </div>

    <div class="wrapper">
      <h2>2. Ordering</h2>
      <p>
        Choose the categories and items you need. Once you have chosen the item,
        click “Add to cart”. While purchasing you can edit your order in your
        Cart ( in the right upper corner of the page): add or delete items from
        the shopping cart, change their number. As soon as you complete the
        order, press “Proceed to checkout” button.
      </p>
    </div>
    <div class="wrapper">
      <h2>3. PROCESSING</h2>
      <p>
        Our well-trained customer service managers will process your order
        within 24 hours since the order has been received and inform you about
        the availability of the products and exact delivery fee. Please note
        that we are closed on Saturdays and Sundays, as well as during public
        holidays.
      </p>
    </div>
    <div class="wrapper">
      <h2>4. PAYMENT</h2>
      <p>
        As soon as the payment is completed we’ll inform you of the time your
        order is shipped and provide you the tracking number.
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: "Delivery",
};
</script>
<style scoped>
.delivery {
  margin: 0 auto;
  padding: 30px 40px;
  max-width: 80%;
}

p {
  margin-bottom: 20px;
  line-height: 1.6;
}

h2 {
  color: #00aa6a;
  margin-bottom: 15px;
  text-transform: uppercase;
}
.title {
  padding-bottom: 15px;
  text-align: center;
  text-transform: uppercase;
  font-size: 26px;
  color: #000;
  user-select: none;
}
</style>