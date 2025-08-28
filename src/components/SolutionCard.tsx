import Image, { StaticImageData } from "next/image";
import React from "react";

interface SolutionITCardProps {
  iconSrc: string | StaticImageData;
  title: string;
  description: string;
}
export const SolutionITCard: React.FC<SolutionITCardProps> = ({
  iconSrc,
  title,
  description,
}) => {
  const iconWidth = 80;
  const iconHeight = 80;
  return (
    <div className="relative bg-neutral-950 rounded-2xl md:w-[373px] w-[361px] p-xl flex flex-col">
      <div className={`absolute -top-1/2 translate-y-[60px]`}>
        <Image
          src={iconSrc}
          alt="Icon Solution IT"
          width={iconWidth}
          height={iconHeight}
          className="ml-3"
        />
      </div>

      <div className="mt-16 mx-5">
        <h3 className="text-xl-bold text-base-white ">{title}</h3>
        <p className="text-md-medium text-neutral-400">{description}</p>
      </div>
    </div>
  );
};
