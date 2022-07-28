import { NavLink } from "react-router-dom";

const DropDown = ({ items, isProduct }) => {
  return (
    <div className="dropdown">
      <ul>
        {items.map((currentItem) => {
          return (
            <li>
              {isProduct ? (
                <a href="/products">{currentItem}</a>
              ) : (
                <a href="/pets">{currentItem}</a>
              )}
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
