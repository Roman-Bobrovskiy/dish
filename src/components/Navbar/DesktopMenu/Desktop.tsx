import { NavbarBtn } from "../NavbarBtn";
import { NavLink, useLocation } from "react-router-dom";
import routes from "../../Routes";

import styles from "../Navbar.module.css";

export const Desktop: React.FC = () => {
  const location = useLocation();
  return (
    <nav>
      <div className={styles.wrapNavbar}>
        <ul className={styles.wrapLinkBtn}>
          <li className={styles.navbarLinkBox}>
            <NavLink className={styles.navbarLink} to={routes.home}>
              Random dish
            </NavLink>
          </li>
          <li className={styles.navbarLinkBox}>
            <NavLink className={styles.navbarLink} to={routes.favourite}>
              Favourites
            </NavLink>
          </li>
        </ul>
        {location.pathname !== routes.home && <NavbarBtn />}
      </div>
    </nav>
  );
};
