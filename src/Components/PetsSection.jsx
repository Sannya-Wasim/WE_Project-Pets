import PetCard from "./PetCard";
import adoptPet_dog from '../assets/images/adoptPet_dog.jpg'
import adoptPet_cat from '../assets/images/adoptPet_cat.jpg'
import adoptPet_fish from '../assets/images/adoptPet_fish.jpg'
import adoptPet_parrot from '../assets/images/adoptPet_parrot.jpg'
import adoptPet_rabbit from '../assets/images/adoptPet_rabbit.jpg'
import adoptPet_turtle from '../assets/images/adoptPet_turtle.jpg'


var pets = [
  {
    image: adoptPet_dog,
    name: "Spike",
    description: "A blue and white naughty cat",
  },
  {
    image: adoptPet_cat,
    name: "Tom",
    description: "A blue and white naughty cat",
  },
  {
    image: adoptPet_fish,
    name: "Tom",
    description: "A blue and white naughty cat",
  },
  {
    image: adoptPet_parrot,
    name: "Tom",
    description: "A blue and white naughty cat",
  },
  {
    image: adoptPet_rabbit,
    name: "Tom",
    description: "A blue and white naughty cat",
  },
  {
    image: adoptPet_turtle,
    name: "Tom",
    description: "A blue and white naughty cat",
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
