import {NavLink} from 'react-router-dom';

const DropDown = ({ items }) => {
  return (
    <div className="dropdown">
      <ul>
        {items.map((currentItem) => {
          return (
            <li>
              <a href="">{currentItem}</a>
              {/* <NavLink to={`${currentItem}`}>{currentItem}</NavLink> */}
              {/* <NavLink to="/home" /> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDown;
