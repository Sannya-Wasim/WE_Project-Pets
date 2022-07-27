import PetCard from "./PetCard";
import adoptPet_dog from "../assets/images/adoptPet_dog.jpg";
import adoptPet_cat from "../assets/images/adoptPet_cat.jpg";
import adoptPet_fish from "../assets/images/adoptPet_fish.jpg";
import adoptPet_parrot from "../assets/images/adoptPet_parrot.jpg";
import adoptPet_rabbit from "../assets/images/adoptPet_rabbit.jpg";
import adoptPet_turtle from "../assets/images/adoptPet_turtle.jpg";

var pets = [
  {
    image: adoptPet_dog,
    name: "Dogs",
    description: "Find yourself a loyal buddy!",
    path: "dogs",
  },
  {
    image: adoptPet_cat,
    name: "Cats",
    description: "Explore a range of cheeky caregivers!",
    path: "cats",
  },
  {
    image: adoptPet_fish,
    name: "Fishes",
    description: "Dive into the world of aquatic buddies!",
    path: "fishes",
  },
  {
    image: adoptPet_parrot,
    name: "Parrots",
    description: "Discover a spectrum of colourful birds!",
    path: "parrots",
  },
  {
    image: adoptPet_rabbit,
    name: "Rabbits",
    description: "All you need is love and a buddy rabbit!",
    path: "rabbits",
  },
  {
    image: adoptPet_turtle,
    name: "Turtles",
    description: "Keep calm and buy a turtle!",
    path: "turtles",
  },
];

const PetsSection = () => {
  return (
    <section id="pets-section">
      <div className="cover-div">
        <h2>Pets To Be Adopted</h2>
        <div id="pets">
          {pets.map((pet) => {
            return <PetCard pet={pet} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default PetsSection;
