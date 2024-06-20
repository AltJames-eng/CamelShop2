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
    itemImage: '../images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg'
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
    src="/public/images/customerbox-aXq1oCCjlVM-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="public/images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="public/images/vinicius-amnx-amano-dbOV1qSiL-c-unsplash.jpg"
    cover
  ></v-carousel-item>
</v-carousel>
    

    
  </v-card>
  <v-card align="center">
        <v-card-item>
          <v-card-title>DIABETES FOR SALE</v-card-title>

          <v-card-subtitle>You might get diabetes anyway so why not do it in style :]</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Welcome to Camel Shop, where sweet dreams come true! Dive into our oasis of confectionery delights, where every treat is a journey to flavor-filled destinations. From exotic chocolates to traditional favorites, satisfy your cravings with a click. Experience the magic of Camel Shop, where every bite is a taste adventure!!
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
        text="Camel Shop is my go-to for satisfying my sweet tooth. Their candies are top-notch and the customer service is excellent. Highly recommend!"
        title="Deliciously Delightful!"
      ></v-card>

      <div class="text-center text-caption">Using Props Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          "A Taste Adventure"
        </template>

        <template v-slot:subtitle>
          Mike Oxlong
        </template>

        <template v-slot:text>
          "I love Camel Shop for their diverse candy selection! They blend familiar favorites with exotic flavors, making every order a sweet adventure."
        </template>
      </v-card>

      <div class="text-center text-caption">Using Slots Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>"Perfect Sweet Treats"</v-card-title>

          <v-card-subtitle>Anna Borshion</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          "Camel Shop never disappoints! Their candies are always fresh and delicious. Whether for myself or as a gift, they ensure satisfaction every time."
        </v-card-text>
      </v-card>

      <div class="text-center text-caption">Using Markup Only</div>
    </v-col>
  </v-row>
</template>

