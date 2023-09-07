import { PropsWithChildren } from "react";
import styles from "./site-wrapper.module.scss";

export default function SiteWrapper({ children }: PropsWithChildren) {
  return <div className={styles.container}>{children}</div>;
}
