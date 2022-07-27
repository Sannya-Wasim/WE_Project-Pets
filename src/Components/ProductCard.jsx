import rightArrow from '../assets/images/right-arrow.png'

const ProductCard = ({ product }) => {
  return (
    <figure className="product-card">
      <img src={product.image} alt="animal" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="arrow-button">
        <a href={`${product.path}`}>Get Now</a>
        <img
          src={rightArrow}
          alt="arrow"
          className="right-arrow"
        />
      </div>
    </figure>
  );
};

export default ProductCard;
