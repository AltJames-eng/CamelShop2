<template>
  <v-app-bar :elevation="2" color="red">
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>CAMEL SHOP</v-app-bar-title>

  <v-btn to="/">Home</v-btn>
  <v-btn to="/Products">Products</v-btn>
  <v-btn to="/AboutUs">About Us</v-btn>
  <v-btn to="/ContactUs">Contact Us</v-btn>
  <v-btn to="/ServicesOffered">Services Offered</v-btn>
  <v-btn to="/Cart">Cart</v-btn>
  
</v-app-bar>  
</template>