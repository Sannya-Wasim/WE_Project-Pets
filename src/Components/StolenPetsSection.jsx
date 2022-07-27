import {NavLink} from 'react-router-dom';

const StolenPetsSection = () => {
  return (
    <section id="stolen-pets-section">
      <div className="cover-div stolen-pets-div">
        <h2>We Care for you</h2>
        <h4>If your Pet is Stolen or Lost contact us here.</h4>
        <h4>We can help you find it</h4>
        <NavLink className="button" to="/stolen">
          Report
        </NavLink>
      </div>
    </section>
  );
};

export default StolenPetsSection;
