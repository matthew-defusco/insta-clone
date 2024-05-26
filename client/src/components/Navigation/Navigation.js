import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import {
  faCompass,
  faSquarePlus,
  faCircleUser,
} from "@fortawesome/free-regular-svg-icons";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/home">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </li>
        <li id={styles.search}>
          <button>Search</button>
        </li>
        <li>
          <Link to="/explore">
            <FontAwesomeIcon icon={faCompass} />
          </Link>
        </li>
        <li>
          <Link to="/create">
            <FontAwesomeIcon icon={faSquarePlus} />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FontAwesomeIcon icon={faCircleUser} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
