const state = {
  stockDetails: [
    {
      itemNumber: 1,
      itemName: "Hats",
      itemPrice: 5,
      itemQuantity: 0,
      itemImage: "../clothings/hats.jpg",
      description:
        " Stylish and versatile hats for every occasion, from casual caps to sophisticated fedoras, perfect for adding a finishing touch to any outfit.",
    },
    {
      itemNumber: 27466,
      itemName: "Jackets",
      itemPrice: 10,
      itemQuantity: 0,
      itemImage: "public/clothings/jackets.jpg",
      description:
        " A collection of trendy and functional jackets, including denim, leather, and bomber styles, designed to keep you warm while looking fashionable.",
    },
    {
      itemNumber: 27466,
      itemName: "Jeans",
      itemPrice: 10,
      itemQuantity: 0,
      itemImage: "public/clothings/jeans.jpg",
      description:
        "High-quality jeans available in various cuts and washes, offering both comfort and durability for everyday wear",
    },
    {
      itemNumber: 27466,
      itemName: "Shoes",
      itemPrice: 10,
      itemQuantity: 0,
      itemImage: "public/clothings/shoes.jpg",
      description:
        "An array of footwear options, including sneakers, boots, and formal shoes, crafted to provide the perfect blend of style and comfort.",
    },
    {
      itemNumber: 27466,
      itemName: "Suits",
      itemPrice: 10,
      itemQuantity: 0,
      itemImage: "public/clothings/suits.jpg",
      description:
        "Elegant and well-tailored suits, ideal for formal occasions and business settings, ensuring you look sharp and professional.",
    },
    {
      itemNumber: 27466,
      itemName: "Sweaters",
      itemPrice: 10,
      itemQuantity: 0,
      itemImage: "public/clothings/sweaters.jpg",
      description:
        " Cozy and stylish sweaters in a range of materials and designs, perfect for layering and keeping warm during cooler months.",
    },
    {
      itemNumber: 27466,
      itemName: "Trousers",
      itemPrice: 10,
      itemQuantity: 0,
      itemImage: "public/clothings/trousers.jpg",
      description:
        "Comfortable and fashionable trousers, including chinos and dress pants, suitable for both casual and formal wear.",
    },
    {
      itemNumber: 27466,
      itemName: "Tshirts",
      itemPrice: 10,
      itemQuantity: 0,
      itemImage: "public/clothings/tshits.jpg",
      description:
        "Comfortable and fashionable trousers, including chinos and dress pants, suitable for both casual and formal wear.",
    },
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