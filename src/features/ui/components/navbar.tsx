import styles from "./navbar.module.scss";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link title="Strona główna" to="/">
          <img src={logo} alt="Logo inFakt" />
        </Link>
      </div>
    </nav>
  );
}
