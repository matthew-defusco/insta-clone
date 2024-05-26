import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./Search.module.css";

const Search = ({ style, onSearch }) => {
  return (
    <div className={styles.search} style={style}>
      <input
        type="text"
        className={styles["search-input"]}
        onChange={e => onSearch(e.target.value)}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
};

export default Search;
