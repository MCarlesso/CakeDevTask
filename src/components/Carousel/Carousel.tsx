import { FunctionComponent, PropsWithChildren } from "react";
import styles from "./Carousel.module.css";

export const Carousel: FunctionComponent<PropsWithChildren<unknown>> = ({ children }) => {
    return <div className={styles.carouselContainer}>{children}</div>;
};
