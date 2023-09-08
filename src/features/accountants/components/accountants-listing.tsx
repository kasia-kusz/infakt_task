import { useEffect, useState } from "react";
import Button from "../../ui/components/button";
import { AccountantType, getAccountants } from "../../../api/accountants";
import styles from "./accountants-listing.module.scss";
import AccountantCard from "./accountant-card";

export default function AccountantsListing() {
  const [page, setPage] = useState(1);
  const [accountants, setAccountants] = useState<AccountantType[]>([]);
  const [isError, setIsError] = useState(false);

  function loadAccountants() {
    try {
      setIsError(false);
      if (page === 1) {
        getAccountants(page).then((data) => {
          setAccountants(data.results);
        });
      } else {
        getAccountants(page + 1).then((data) => {
          setAccountants((prev) => prev.concat(data.results));
        });
      }
      setPage((prev) => prev + 1);
    } catch (error) {
      setIsError(true);
    }
  }

  useEffect(() => {
    loadAccountants();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.listing}>
        {accountants.map((item) => (
          <AccountantCard key={item.login.uuid} {...item} />
        ))}
      </div>
      {isError ? (
        <div data-testid="error-component">
          <Button onClick={loadAccountants}>Spróbuj ponownie</Button>
          <p className={styles.error}>Coś poszło nie tak!</p>
        </div>
      ) : (
        <div data-testid="data-component">
          <Button onClick={loadAccountants} data-testid="more">
            Wczytaj więcej
          </Button>
        </div>
      )}
    </section>
  );
}
