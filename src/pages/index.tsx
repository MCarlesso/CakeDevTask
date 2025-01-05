import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { AppHeader } from "@/components/AppHeader/AppHeader";
import { Toggle } from "@/components/Toggle/Toggle";
import { Button } from "@/components/Button/Button";
import { useState } from "react";
import { Modal } from "@/components/Modal/Modal";
import { LearningCarousel } from "@/components/VideoCarousel/VideoCarousel";
import { learningResources } from "@/data/learningResources";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Head>
                <title>Cake Dev Task</title>
                <meta name="description" content="Engineering Task for Cake Interview " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AppHeader />
            <div className={`${styles.page} ${inter.variable} `}>
                <main className={styles.main}>
                    {/* Text Container */}
                    <h2>Welcome</h2>
                    <div className={styles.content}>
                        <h5>Change the mood</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non mi eu
                            massa imperdiet aliquam.
                        </p>
                    </div>
                    <Toggle />
                    <Button title="Open Modal" onClick={() => openModal()} variant="primary" />
                    <Modal
                        title={"Hello, I'm a modal"}
                        subtitle={"By clicking the switch, you will toggle the mood"}
                        isModalOpen={isModalOpen}
                        onClose={closeModal}
                    />
                    <LearningCarousel carouselItems={learningResources} />
                </main>
            </div>
        </>
    );
}
