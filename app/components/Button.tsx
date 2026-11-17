import type { ReactNode } from "react";
import styles from "./Button.module.css";

type Props = {
  href: string;
  variant?: "gold" | "green" | "ghost";
  className?: string;
  children: ReactNode;
};

export default function Button({ href, variant = "gold", className = "", children }: Props) {
  return (
    <a href={href} className={`${styles.btn} ${styles[variant]} ${className}`}>
      {children}
    </a>
  );
}
