<script>
   export default{
    data(){
      return{
        image: '../images/vinicius-amnx-amano-dbOV1qSiL-c-unsplash.jpg',
        url: 'https://www.vuejs.org/',
        stockDetails : [
  {
    itemNumber: 1,
    itemName : "Sweets",
    itemPrice : 5,
    itemQuantity : 30,
    itemImage: '../images/customerbox-aXq1oCCjlVM-unsplash.jpg'
      },
    {
    itemNumber: 27466,
    itemName : "Lollipop",
    itemPrice : 10,
    itemQuantity : 4,
    itemImage: 'public/images/artem-beliaikin-GLg0z5z8EQU-unsplash.jpg'
    },
    ],
    }

      },
      methods(){

      },
      computed(){
        
      }

    };
  
  
</script>

<template>
 
  <v-card
    class="mx-auto"
    
    width="1000"
  >
    
      <v-carousel>
  <v-carousel-item
    src="public/images/artem-beliaikin-GLg0z5z8EQU-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="public/images/joshua-coleman-_yVRLC75Ma8-unsplash (1).jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="public/images/martin-adams-zbPDL84kvRg-unsplash.jpg"
    cover
  ></v-carousel-item>
</v-carousel>
    

    
  </v-card>
  <v-card align="center">
        <v-card-item>
          <v-card-title>DRESS TO IMPRESS</v-card-title>

          <v-card-subtitle>Everyone deserves to dress in style!!</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Clothline is your go-to online store for stylish, affordable clothing. Discover trendy and timeless pieces for men, women, and children, perfect for any occasion. Shop now and elevate your wardrobe with Clothline's curated collection of high-quality, comfortable apparel.
        </v-card-text>

      </v-card>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <h3 class="text-center">What our customers say</h3>
      <v-divider></v-divider>

      <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="Hugh Jass"
        text="I've been shopping at Clothline for months, and I'm always impressed with the quality of their clothes. Everything feels durable and looks great, even after multiple washes. Highly recommend!"
        title="Fantastic Quality!"
      ></v-card>

      <div class="text-center text-caption"></div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          "Stylish and Affordable"
        </template>

        <template v-slot:subtitle>
          Mike Oxlong
        </template>

        <template v-slot:text>
          Clothline has become my favorite place to shop. Their prices are unbeatable, and I always find trendy pieces that fit perfectly. Love their selection!
        </template>
      </v-card>

      <div class="text-center text-caption"></div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>"Great Customer Service"</v-card-title>

          <v-card-subtitle>Anna Borshion</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          I had an issue with my order, and Clothline's customer service was amazing. They resolved it quickly and were so friendly. I'll definitely keep coming back!







        </v-card-text>
      </v-card>

      <div class="text-center text-caption"></div>
    </v-col>
  </v-row>
</template>

