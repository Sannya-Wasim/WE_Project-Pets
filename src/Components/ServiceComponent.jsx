import { NavLink } from "react-router-dom";

const ServiceComponent = ({ service }) => {
  return (
    <div id="service-element">
      <a href={`${service.path}`}>
        <figure>
          <img src={service.image} />
          <figcaption>
            <h3>{service.title}</h3>
            <p>{service.subtitle}</p>
          </figcaption>
        </figure>
      </a>
    </div>
  );
};

export default ServiceComponent;
