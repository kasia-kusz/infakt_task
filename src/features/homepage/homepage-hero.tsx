import Button from "../ui/components/button";
import styles from "./homepage-hero.module.scss";
import link from "../../assets/icon.png";

export default function Homepage() {
  return (
    <main className={styles.container}>
      <div className={styles.logo}>
        <img alt="Logo firmowe inFakt" src={link} />
      </div>
      <div>
        <Button el="link" url="/ksiegowi">
          Księgowi
        </Button>
      </div>
    </main>
  );
}
