import { PropsWithChildren } from "react";
import styles from "./card.module.scss";
import classNames from "classnames";

type CardProps = {
  className?: string;
};

export default function Card({
  children,
  className,
}: PropsWithChildren<CardProps>) {
  return <div className={classNames(styles.card, className)}>{children}</div>;
}
