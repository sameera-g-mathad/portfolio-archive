import React from "react";
import { type carouselInterface } from "@/interfaces";
/**
 * This component will be used for 
 * carousel.
 * @returns React.FC
 */

// Inspired from tutorial: https://www.youtube.com/watch?v=mF9yOwlunWk
export const Carousel: React.FC<carouselInterface> = ({ children, height, reverse, slider, width }) => {
    // Will be used to adjust the width of each item
    // based on the number of elements.
    const quantity = React.Children.count(children);
    const sliderClassName = slider === 'horizontal' ? 'horizontalSlider' : 'verticalSlider'
    return <div className={`${sliderClassName} `} data-reverse={reverse} style={{ ...({ "--width": width, "--height": height }) as React.CSSProperties }}>
        <div className="list" style={{ ...({ "--quantity": quantity }) as React.CSSProperties }}>
            {
                React.Children.map(children, (child, index) => {
                    return <div className="item" key={index} style={{ ...({ "--position": index }) as React.CSSProperties }}>
                        {child}
                    </div>
                })
            }
        </div>
    </div >;
};

Carousel.displayName = 'Carousel';
