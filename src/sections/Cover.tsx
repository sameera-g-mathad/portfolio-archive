import React from "react";
import { VerticalImageSlider } from "@/components";
/**
 * This will be the Cover section of 
 * the portfolio.
 * @returns React.JSX
 */
export const Cover: React.FC = () => {
    return <div className="w-full h-screen flex justify-between " id='cover'>
        <div className="flex w-full ">
            something needs to be here
        </div>
        <VerticalImageSlider />
    </div>;
};

Cover.displayName = 'Cover'