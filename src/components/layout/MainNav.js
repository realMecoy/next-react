import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./MainNav.module.css";
import FavouritesContext from "../../store/favourites-context";

function MainNav() {
  const favouritesCtx = useContext(FavouritesContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>All Meetups</Link>
          </li>
          <li>
            <Link to={"/new-meetup"}>New Meetup</Link>
          </li>
          <li>
            <Link to={"/favourites"}>
              My favourites
              <span className={styles.badge}>{favouritesCtx.totalFavourites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
