function productImg(filename) {
  return `./productsImg/${filename}.jpg`;
}

const products = [
  {
    id: 1,
    title: "Shoe",
    price: 30,
    description: "Finest shoe",
    image: productImg("shoe"),
  },
  {
    id: 2,
    title: "Laptop ASUS",
    price: 2000,
    description: "Finest Laptop",
    image: productImg("laptop"),
  },
  {
    id: 3,
    title: "Acrylic Glass",
    price: 5,
    description: "Finest glassbox",
    image: productImg("acrylicGlass"),
  },
  {
    id: 4,
    title: "Dafha Fish Snack",
    price: 2,
    description: "Finest snack",
    image: productImg("dahfa"),
  },
];

export default products;
