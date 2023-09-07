import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  el?: "button" | "link" | "a";
  url?: string;
  newTab?: boolean;
};

export default function Button({
  children,
  type = "button",
  className,
  el = "button",
  newTab,
  url,
  ...props
}: ButtonProps) {
  const newTabProps = newTab
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <>
      {el === "a" && (
        <a
          {...newTabProps}
          className={classNames(styles.button, className)}
          href={url}
        >
          {children}
        </a>
      )}
      {el === "link" && url && (
        <Link to={url} className={classNames(styles.button, className)}>
          {children}
        </Link>
      )}
      {el === "button" && (
        <button
          className={classNames(styles.button, className)}
          type={type}
          {...props}
        >
          {children}
        </button>
      )}
    </>
  );
}
