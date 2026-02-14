import React from "react";
import { Image } from "@/reusables";
import { type coverImageInterface } from "@/interfaces";
/**
 * Cover image that will be displayed
 * mostly on the cover section of the 
 * portfolio.
 * @returns React.JSX
 */
export const CoverImage: React.FC<coverImageInterface> = ({ alt, src }) => {
    return <div className="border-4 border-white p-2! hover:p-0! transition-all duration-300 rounded-2xl">
        <Image alt={alt} className="w-full h-full m-2 rounded-xl" src={src} />
    </div>
};


CoverImage.displayName = 'CoverImage'