<template>
    <h1>confectionery</h1>
    <div>
        <v-row>
            <v-col cols="12" md="3"  v-for="product in stockDetails" :key=product>
            
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
                            
                        ></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>  
    </div>

</template>
<script>
export default{
    data(){
        return{
            products:[1,2,3,4,5,6,7,8,9,10],
            stockDetails : [
            {
                itemNumber: 1,
                itemName : "Sweets",
                itemPrice : 5,
                itemQuantity : 30,
                itemImage: 'public/images/sweet pictures/deva-williamson-S2jw81lfrG0-unsplash.jpg',
                
            },
            {
                itemNumber: 27466,
                itemName : "Lollipop",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: 'public/images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg',
                
            },
            {
                itemNumber: 27466,
                itemName : "Lollipop",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: 'public/images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg',
                
            },
            {
                itemNumber: 27466,
                itemName : "Lollipop",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: 'public/images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg',
                
            },
            {
                itemNumber: 27466,
                itemName : "Lollipop",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: 'public/images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg',
                
            },
      ]
       }
                 },
    
    methods(){

    }

}
           
</script>