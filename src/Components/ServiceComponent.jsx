const ServiceComponent = ({ service }) => {
  return (
    <figure id="service-element">
      <img src={service.image} />
      <figcaption>
        <h3>{service.title}</h3>
        <p>{service.subtitle}</p>
      </figcaption>
    </figure>
  );
};

export default ServiceComponent;
