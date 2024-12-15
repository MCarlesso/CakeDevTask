import { FunctionComponent } from "react";
import Image from "next/image";
import cakeLogo from "../../../public/cakeLogo.png";
import cakeLogoWhite from "../../../public/cakeLogoWhite.png";
import styles from "./AppHeader.module.css";
import { useTheme } from "@/styles/ThemeContext";

export const AppHeader: FunctionComponent = () => {
    const { theme } = useTheme();
    return (
        <div className={styles.headerContainer}>
            <Image
                src={theme === "light" ? cakeLogo : cakeLogoWhite}
                height={16}
                alt="Cake Equity Logo"
            />
        </div>
    );
};
