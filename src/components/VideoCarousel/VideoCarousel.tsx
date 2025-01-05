import { FunctionComponent } from "react";
import { DashboardContainer } from "../DashboardContainer/DashboardContainer";
import { Carousel } from "../Carousel/Carousel";
import { Card } from "../Card/Card";
import { ProgressMeter } from "../ProgressMeter/ProgressMeter";

export interface LearningResource {
    key: string;
    title: string;
    subtitle: string;
    featureImage: string;
    duration: string;
    percentageComplete: number;
}

interface LearningCarouselProps {
    carouselItems: LearningResource[];
}

export const LearningCarousel: FunctionComponent<LearningCarouselProps> = ({ carouselItems }) => {
    return (
        <DashboardContainer title={"Learning"}>
            <Carousel>
                {carouselItems.map(
                    ({ key, title, subtitle, duration, featureImage, percentageComplete }) => {
                        return (
                            // Hard coded image for now
                            <Card
                                key={key}
                                title={title}
                                subtitle={subtitle}
                                featureImage={featureImage}
                                duration={duration}
                            >
                                <ProgressMeter percentage={percentageComplete} />
                            </Card>
                        );
                    }
                )}
            </Carousel>
        </DashboardContainer>
    );
};
