import styles from "./navbar.module.scss";
import logo from "../../../assets/logo.png";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo inFakt" />
      </div>
    </nav>
  );
}
