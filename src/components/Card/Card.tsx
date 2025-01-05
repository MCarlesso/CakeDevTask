import { FunctionComponent, PropsWithChildren } from "react";
import Image from "next/image";
import styles from "./Card.module.css";

interface CardProps {
    title: string;
    subtitle: string;
    featureImage?: string;
    duration?: string;
}

export const Card: FunctionComponent<PropsWithChildren<CardProps>> = ({
    title,
    subtitle,
    featureImage,
    duration,
    children,
}) => {
    return (
        <div className={styles.cardContainer}>
            {featureImage && (
                <div className={styles.cardImageContainer}>
                    <Image
                        className={styles.cardImage}
                        src={`/${featureImage}`}
                        width={88}
                        height={88}
                        alt=""
                    />
                    <text className={styles.durationText}>{duration}</text>
                </div>
            )}
            <div className={styles.cardChildrenContainer}>
                <div className={styles.cardTextContainer}>
                    <text className={styles.cardTitle}>{title}</text>
                    <text className={styles.cardSubtitle}>{subtitle}</text>
                </div>
                {children}
            </div>
        </div>
    );
};
