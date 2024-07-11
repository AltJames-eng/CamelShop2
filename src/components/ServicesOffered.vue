<template>
  <div class="services-offered">
    <div class="hero-section">
      <h1>Our Services</h1>
      <p>Discover the exceptional services we offer at Clothline.</p>
    </div>
    <div class="services-section">
      <div class="service" v-for="service in services" :key="service.title">
        <h2>{{ service.title }}</h2>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesOffered",
  data() {
    return {
      services: [
        {
          title: "Free Shipping",
          description: "Enjoy free shipping on all orders over $50, delivered straight to your door."
        },
        {
          title: "30-Day Returns",
          description: "Not satisfied with your purchase? Return it within 30 days for a full refund."
        },
        {
          title: "24/7 Customer Support",
          description: "Our friendly customer support team is available 24/7 to assist you with any inquiries."
        },
        {
          title: "Exclusive Discounts",
          description: "Sign up for our newsletter to receive exclusive discounts and early access to sales."
        }
      ]
    };
  }
};
</script>

<style scoped>
.services-offered {
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.hero-section {
  text-align: center;
  background-color: #f4f4f4;
  padding: 20px 0;
  margin-bottom: 20px;
}

.hero-section h1 {
  margin: 0;
  font-size: 2.5em;
}

.services-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.service h2 {
  color: #333;
  margin-bottom: 10px;
}

.service p {
  margin: 0;
}
</style>
