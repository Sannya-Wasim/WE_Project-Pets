import rightArrow from "../assets/images/right-arrow.png";

const PetCard = ({ pet }) => {
  return (
    <figure className="pet-card">
      <img src={pet.image} alt="animal" />
      <h3>{pet.name}</h3>
      <p>{pet.description}</p>
      <div className="arrow-button">
        <a href="/pets">Adopt Now</a>
        <img src={rightArrow} alt="arrow" className="right-arrow" />
      </div>
    </figure>
  );
};

export default PetCard;
