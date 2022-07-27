import ServiceComponent from "./ServiceComponent";
import adopt from "../assets/images/adoptPet.jpg";
import food from "../assets/images/petFood.png";
import accessories from "../assets/images/accessories.jpg";
import stolen from "../assets/images/stolen.jpg";


const services = [
  {
    image: adopt,
    title: "Adopt Pets",
    subtitle: "Adorable animals waiting for your adoption",
    path:"pets",
  },
  {
    image: food,
    title: "Pet Food",
    subtitle: "Get high quality food for your pets",
    path:"products",
  },
  {
    image: accessories,
    title: "Accessories",
    subtitle: "Toys and accessories for your pets care",
    path:"products",
  },
  {
    image: stolen,
    title: "Stolen or Lost",
    subtitle: "Report for your lost or stolen pets",
    path:"stolen",
  },
];

const ServicesSection = () => {
  return (
    <section>
      <div className="cover-div" id="service-div">
        <h2>Our Services</h2>
        <div id="services">
          {services.map((service) => {
            return <ServiceComponent service={service} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
