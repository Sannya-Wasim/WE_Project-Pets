import ProductCard from "./ProductCard";

var products = [
  {
    image:
      "https://www.thenews.com.pk/assets/uploads/updates/2022-05-28/961477_6245241_pet-food_updates.jpg",
    name: "Pet Food",
    description: "The best food for your pet's health",
    path: "products",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/dog-accessories-yellow-background-top-view-pets-animals-concept-still-life-copy-space-flat-lay-104323135.jpg",
    name: "Pet Accessories",
    description: "Accessories to make your life easier and better",
    path: "products",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/indoor-dog-toys-1587002073.jpg?crop=0.668xw:1.00xh;0.162xw,0&resize=640:*",
    name: "Toys",
    description: "Never Be Bored",
    path: "products",
  },
  // {
  //   image: "src/assets/images/petFood.png",
  //   name: "Pet Food",
  //   description: "Pet Food Description",
  //   path: "products",
  // },
  // {
  //   image: "src/assets/images/petFood.png",
  //   name: "Pet Food",
  //   description: "Pet Food Description",
  //   path: "products",
  // },
  // {
  //   image: "src/assets/images/petFood.png",
  //   name: "Pet Food",
  //   description: "Pet Food Description",
  //   path: "products",
  // },
];

const ProductsSection = () => {
  return (
    <section id="products-section">
      <div className="cover-div">
        <h2>Our Products</h2>
        <div id="products">
          {products.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
