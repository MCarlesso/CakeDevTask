import { FunctionComponent, PropsWithChildren } from "react";
import styles from "./DashboardContainer.module.css";

interface DashboardContinerProps {
    title: string;
    headerComponent?: React.ReactNode;
}

export const DashboardContainer: FunctionComponent<PropsWithChildren<DashboardContinerProps>> = ({
    title,
    headerComponent,
    children,
}) => {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.headerContainer}>
                <h3 className={styles.containerTitle}>{title}</h3>
                {headerComponent}
            </div>
            {children}
        </div>
    );
};
