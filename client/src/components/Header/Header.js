import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Header.module.css";

const Header = () => {
  const [search, setSearch] = useState("");
  // console.log(search);
  useEffect(() => {
    const getUsers = setTimeout(() => {
      console.log(search);
    }, 750);

    return () => clearTimeout(getUsers);
  }, [search]);

  return (
    <header id={styles.header}>
      <Logo />
      <Search style={{ marginRight: "5px" }} onSearch={setSearch} />
    </header>
  );
};

export default Header;
