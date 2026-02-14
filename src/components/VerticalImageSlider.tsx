import React from "react";
import { CoverImage } from "./CoverImage";
import { Carousel } from "@/reusables";

export const VerticalImageSlider: React.FC = () => {
    return <div>
        <div className="flex flex-col justify-center gap-5 p-5! w-full h-full ">
            <Carousel slider="horizontal" reverse={false} width='200px' height='200px'>
                <CoverImage alt="Sameer near RiverWalk, Animated" src="https://i.imgur.com/f8Y2FWP.jpg" />
                <CoverImage alt="Sameer near RiverWalk, Animated" src="https://i.imgur.com/OSaNmhF.jpeg" />
                <CoverImage alt="Sameer near ice rink, Chicago(Animated)" src="https://i.imgur.com/G09ElBh.jpeg" />
                <CoverImage alt="Sameer near ice rink, Chicago(Animated)" src="https://i.imgur.com/jMgTMku.jpg" />
            </Carousel>
            <Carousel slider="horizontal" reverse={true} width='200px' height='200px'>
                <CoverImage alt="Sameer near RiverWalk, Animated" src="https://i.imgur.com/f8Y2FWP.jpg" />
                <CoverImage alt="Sameer near RiverWalk, Animated" src="https://i.imgur.com/f8Y2FWP.jpg" />
                <CoverImage alt="Sameer near ice rink, Chicago(Animated)" src="https://i.imgur.com/jMgTMku.jpg" />
                <CoverImage alt="Sameer near ice rink, Chicago(Animated)" src="https://i.imgur.com/jMgTMku.jpg" />
            </Carousel>
            <Carousel slider="horizontal" reverse={false} width='200px' height='200px'>
                <CoverImage alt="Sameer near RiverWalk, Animated" src="https://i.imgur.com/f8Y2FWP.jpg" />
                <CoverImage alt="Sameer near RiverWalk, Animated" src="https://i.imgur.com/f8Y2FWP.jpg" />
                <CoverImage alt="Sameer near ice rink, Chicago(Animated)" src="https://i.imgur.com/jMgTMku.jpg" />
                <CoverImage alt="Sameer near ice rink, Chicago(Animated)" src="https://i.imgur.com/jMgTMku.jpg" />
            </Carousel>
        </div>
    </div>
};

VerticalImageSlider.displayName = 'VerticalImageSlider'