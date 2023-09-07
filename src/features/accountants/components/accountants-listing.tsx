import { useEffect, useState } from "react";
import Button from "../../ui/components/button";
import { AccountantType, getAccountants } from "../../../api/accountants";
import styles from "./accountants-listing.module.scss";
import AccountantCard from "./accountant-card";

export default function AccountantsListing() {
  const [page, setPage] = useState(1);
  const [accountants, setAccountants] = useState<AccountantType[]>([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    try {
      setIsError(false);
      getAccountants(page).then((data) => {
        if (page === 1) {
          setAccountants(data.results);
        } else {
          setAccountants((prev) => prev.concat(data.results));
        }
      });
    } catch (error) {
      setIsError(true);
      if (page > 1) {
        setPage((prev) => prev - 1);
      }
    }
  }, [page]);

  function handleLoadMore() {
    setPage((prev) => prev + 1);
  }

  return (
    <section className={styles.container}>
      <div className={styles.listing}>
        {accountants.map((item) => (
          <AccountantCard key={item.login.uuid} {...item} />
        ))}
      </div>
      {isError ? (
        <>
          <Button onClick={handleLoadMore}>Spróbuj ponownie</Button>
          <p className={styles.error}>Coś poszło nie tak!</p>
        </>
      ) : (
        <Button onClick={handleLoadMore}>Wczytaj więcej</Button>
      )}
    </section>
  );
}
