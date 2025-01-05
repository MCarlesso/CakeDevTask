import { CSSProperties, FunctionComponent } from "react";
import styles from "./ProgressMeter.module.css";

interface ProgressMeterProps {
    percentage: number;
}

export const ProgressMeter: FunctionComponent<ProgressMeterProps> = ({ percentage }) => {
    const percentageStyle: CSSProperties = {
        width: ` ${percentage}%`,
    };
    return (
        <div className={styles.progressMeterOuter}>
            <div className={styles.progressMeterInner} style={percentageStyle}></div>
        </div>
    );
};
