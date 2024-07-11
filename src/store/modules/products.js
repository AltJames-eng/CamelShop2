const state = {
  stockDetails: [
    {
      itemNumber: 1,
      itemName: "Hats",
      itemPrice: 5,
      itemQuantity: 0,
      itemImage: "../clothings/hats.jpg",
      description:
        "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties",
    },
    {
      itemNumber: 27466,
      itemName: "Jackets",
      itemPrice: 10,
      itemQuantity: 0,
      itemImage: "public/clothings/jackets.jpg",
      description:
        "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties",
    },
    {
      itemNumber: 27466,
      itemName: "Jeans",
      itemPrice: 10,
      itemQuantity: 0,
      itemImage: "public/clothings/jeans.jpg",
      description:
        "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties",
    },
    {
      itemNumber: 27466,
      itemName: "Shoes",
      itemPrice: 10,
      itemQuantity: 0,
      itemImage: "public/clothings/shoes.jpg",
      description:
        "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties",
    },
    {
      itemNumber: 27466,
      itemName: "Suits",
      itemPrice: 10,
      itemQuantity: 0,
      itemImage: "public/clothings/suits.jpg",
      description:
        "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties",
    },
    {
      itemNumber: 27466,
      itemName: "Sweaters",
      itemPrice: 10,
      itemQuantity: 0,
      itemImage: "public/clothings/sweaters.jpg",
      description:
        "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties",
    },
    {
      itemNumber: 27466,
      itemName: "Trousers",
      itemPrice: 10,
      itemQuantity: 0,
      itemImage: "public/clothings/trousers.jpg",
      description:
        "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties",
    },
    {
      itemNumber: 27466,
      itemName: "Tshirts",
      itemPrice: 10,
      itemQuantity: 0,
      itemImage: "public/clothings/tshits.jpg",
      description:
        "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties",
    }
  ],
};
    const getters = {
    stock: (state) => state.stockDetails,
    }
    const actions = {
    }
    const mutations = {
    }
    export default {
    state,
    getters,
    actions,
    mutations
    }