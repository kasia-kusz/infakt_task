import Button from "../../features/ui/components/button";
import styles from "./error-page.module.scss";

export default function ErrorPage() {
  return (
    <main className={styles.container}>
      <div className={styles.text}>404</div>
      <Button el="link" url="/">
        Strona główna
      </Button>
    </main>
  );
}
