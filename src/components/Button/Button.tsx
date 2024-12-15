import { ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    title: string;
    variant: ButtonVariant;
}

export const Button: FunctionComponent<ButtonProps> = ({
    title,
    variant = "primary",
    ...buttonProps
}) => {
    return (
        <button className={` ${styles.button} ${styles[variant]}`} {...buttonProps}>
            <text>{title}</text>
        </button>
    );
};
