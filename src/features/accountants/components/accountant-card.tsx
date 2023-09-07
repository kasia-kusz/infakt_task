import classNames from "classnames";
import Button from "../../ui/components/button";
import Card from "../../ui/components/card";
import styles from "./accountant-card.module.scss";
import { AccountantType } from "../../../api/accountants";

export default function AccountantCard({
  cell,
  name,
  email,
  picture,
}: AccountantType) {
  return (
    <Card className={styles.card}>
      <div className={styles.header}>
        <img
          className={styles.avatar}
          alt="Zdjęcie księgowej"
          src={picture.thumbnail}
        />
        <div className={styles.ellipsisBox}>
          <div className={styles.title}>Twoja księgowa</div>
          <div
            className={styles.name}
            title={`${name.first} ${name.last}`}
          >{`${name.first} ${name.last}`}</div>
        </div>
      </div>

      <div className={styles.ellipsisBox}>
        <div className={styles.label}>E-mail</div>
        <a
          href={`mailto:${email}`}
          className={classNames(styles.text, styles.email)}
          title={email}
        >
          {email}
        </a>
      </div>

      <div>
        <div className={styles.label}>Telefon</div>
        <a href={`tel:${cell}`} className={styles.text}>
          {cell}
        </a>
      </div>

      <div>
        <div className={styles.label}>Średnia cena netto usługi / m-c</div>
        <div className={styles.text}>
          350,00 <span className={styles.textSmaller}>PLN</span>
        </div>
      </div>
      <Button>Dowiedz się więcej</Button>
    </Card>
  );
}
