<template>
  <div class="contact-us">
    <div class="hero-section">
      <h1>Contact Us</h1>
      <p>We're here to help! Reach out to us with any questions or concerns.</p>
    </div>
    <div class="form-section">
      <h2>Get in Touch</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    submitForm() {
      alert(`Thank you for contacting us, ${this.form.name}! We will get back to you soon.`);
      // Here you can handle form submission, e.g., send the data to a server
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    }
  }
};
</script>

<style scoped>
.contact-us {
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 600px;
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

.form-section h2 {
  color: #333;
  margin-bottom: 10px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.form-group textarea {
  height: 100px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
