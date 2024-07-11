<template>
  <div class="about-us">
    <div class="hero-section">
      <h1>About Clothline</h1>
      <p>Your ultimate destination for stylish and affordable clothing.</p>
    </div>
    <div class="content-section">
      <h2>Our Story</h2>
      <p>
        Founded with a passion for fashion, Clothline offers a diverse range of apparel for men, women, and children. Our mission is to provide high-quality, comfortable clothing that makes you look and feel your best.
      </p>
      <h2>Our Values</h2>
      <ul>
        <li>Quality: We ensure every piece meets our high standards.</li>
        <li>Affordability: Fashion should be accessible to everyone.</li>
        <li>Customer Satisfaction: Your happiness is our top priority.</li>
      </ul>
      <h2>Contact Us</h2>
      <p>
        Have questions or need assistance? Reach out to our friendly customer service team at <a href="mailto:support@clothline.com">support@clothline.com</a>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
.about-us {
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

.content-section h2 {
  color: #333;
  margin-bottom: 10px;
}

.content-section p,
.content-section ul {
  margin-bottom: 20px;
}

.content-section ul {
  list-style-type: disc;
  padding-left: 20px;
}

.content-section a {
  color: #007bff;
  text-decoration: none;
}

.content-section a:hover {
  text-decoration: underline;
}
</style>
