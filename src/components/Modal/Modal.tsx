import { FunctionComponent, PropsWithChildren } from "react";
import { Button } from "../Button/Button";
import styles from "./Modal.module.css";
import { useTheme } from "@/styles/ThemeContext";

interface ModalProps {
    title: string;
    subtitle: string;
    isModalOpen: boolean;
    onClose: () => void;
}

export const Modal: FunctionComponent<PropsWithChildren<ModalProps>> = ({
    title,
    subtitle,
    isModalOpen,
    onClose,
    children,
}) => {
    const { toggleTheme } = useTheme();

    if (isModalOpen !== true) {
        return null;
    }

    return (
        <div className={styles.modalBackground}>
            <div id="modalContent" className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>
                {children}
                <div className={styles.buttonGroup}>
                    <Button title="Close" variant="secondary" onClick={onClose} />
                    <Button title="Toggle" variant="primary" onClick={toggleTheme} />
                </div>
            </div>
        </div>
    );
};
