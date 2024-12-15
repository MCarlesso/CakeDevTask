import { FunctionComponent } from "react";
import styles from "./Toggle.module.css";
import { useTheme } from "@/styles/ThemeContext";

export const Toggle: FunctionComponent = () => {
    // Using https://www.w3schools.com/howto/howto_css_switch.asp as template
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={styles.toggleContainer}>
            <text className={styles.toggleLabel}>Light</text>
            <label className={styles.switch}>
                <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
                <span className={`${styles.slider} ${styles.round} `}></span>
            </label>
            <text className={styles.toggleLabel}>Dark</text>
        </div>
    );
};
