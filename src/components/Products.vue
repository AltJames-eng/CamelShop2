<template>  
    <h1>DELICACIES OFFERED</h1>
    <p>{{ total }}</p>
    <v-card
      class="mx-auto"
      width="800"
      >
      <v-card-text class="bg-surface-light pt-4">
        <v-card-title>Cart
            {{ total }}
            <v-btn
            color="orange"
            text="Checkout"
            ></v-btn>

        </v-card-title>
        <v-row>
            <v-col cols="12" md="4"  v-for="product in cartItems" :key=product>
            
                <v-card
                class="mx-auto my-12"
                max-width="374"
                >
                    <v-img
                    height="250"
                    :src="product.itemImage"
                    cover
                    ></v-img>

                    <v-card-item>
                    <v-card-title>{{product.itemName}}</v-card-title>
                    </v-card-item>

                    <v-card-text>
                    
                    <div class="my-4 text-subtitle-1">
                        {{product.itemPrice}}
                    </div>

                    <div>{{product.description}}</div>
                    </v-card-text>

                    <v-divider class="mx-4 mb-1"></v-divider>

                    <v-card-actions>
                        <v-btn
                            color="deep-purple-lighten-2"
                            text="Remove From Cart"
                            block
                            border
                            @click="removeFromCart(product.itemPrice)" 
                        ></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row> 
      </v-card-text>
      
    </v-card>

    <div>
        <v-row>
            <v-col cols="12" md="4"  v-for="product in stock" :key=product>
            
                <v-card
                class="mx-auto my-12"
                max-width="374"
                >
                    <v-img
                    height="250"
                    :src="product.itemImage"
                    cover
                    ></v-img>

                    <v-card-item>
                    <v-card-title>{{product.itemName}}</v-card-title>
                    </v-card-item>

                    <v-card-text>
                    
                    <div class="my-4 text-subtitle-1">
                        {{product.itemPrice}}
                    </div>

                    <div>{{product.description}}</div>
                    </v-card-text>

                    <v-divider class="mx-4 mb-1"></v-divider>

                    <v-card-actions>
                        <v-btn
                            color="deep-purple-lighten-2"
                            text="Add To Cart"
                            block
                            border
                            @click="addToCart(product)" 
                        ></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>  
    </div>

</template>
<script>

import { mapActions, mapGetters } from 'vuex'

export default{
    data(){
        return{
          /*  products:[1,2,3,4,5,6,7,8,9,10],
            stockDetails : [
            {
                itemNumber: 1,
                itemName : "cupcakes",
                itemPrice : 15,
                itemQuantity : 30,
                itemImage: 'public/sweet pictures/cupcakes.jpg',
                
            },
            {
                itemNumber: 2,
                itemName : "Lollipops",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: 'public/sweet pictures/insung-yoon-ewqmlik3x6o-unsplash.jpg',
                
            },
            {
                itemNumber: 27466,
                itemName : "Donuts",
                itemPrice : 25,
                itemQuantity : 4,
                itemImage: 'public/sweet pictures/donuts.jpg',
                
            },
            {
                itemNumber: 27466,
                itemName : "cookies",
                itemPrice : 15,
                itemQuantity : 4,
                itemImage: 'public/sweet pictures/cookies.jpg',
                
            },
            {
                itemNumber: 27466,
                itemName : "Brown Chocolate",
                itemPrice : 30,
                itemQuantity : 4,
                itemImage: 'public/sweet pictures/brown chocolate.jpg',
                
            },
            {
                itemNumber: 27466,
                itemName : "lickerish",
                itemPrice : 7,
                itemQuantity : 4,
                itemImage: 'public/sweet pictures/lickerish.jpg',
                
            },
            {
                itemNumber: 27466,
                itemName : "sweets",
                itemPrice : 5,
                itemQuantity : 4,
                itemImage: 'public/sweet pictures/sweets.jpg',
                
            },
            {
                itemNumber: 27466,
                itemName : "Wafers",
                itemPrice : 15,
                itemQuantity : 4,
                itemImage: 'public/sweet pictures/wafers.jpg',
                
            },
            {
                itemNumber: 27466,
                itemName : "White Chocolate",
                itemPrice : 20,
                itemQuantity : 4,
                itemImage: 'public/sweet pictures/white chocolate.jpg',
                
            },
            {
                itemNumber: 27466,
                itemName : "Biscuits",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: 'public/sweet pictures/biscuits.jpg',
                
            },
            ],
            total: 0,
            cartItems: [], */
       }
                 },
    
    methods:{
        /* calculateTotal(itemPrice){
            this.total += itemPrice
        },
        addToCart(product){
            this.cartItems.push(product)
            this.calculateTotal(product.itemPrice)
        },
        removeFromCart(product){
            this.cartItems.pop(product)
            this.total -= product.itemPrice
        } */
        ...mapActions([
            "addToCart"
           ])

    },
    computed:{
        ...mapGetters({
            stock: 'stock'
        })
    },

}
           
</script>