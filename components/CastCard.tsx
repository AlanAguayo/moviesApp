import { NO_IMAGE_URL, IMAGE_URL } from "@/config";
import Image from "next/image";
import React from "react";

export interface ICastCard {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

const CastCard = ({ cast }: { cast: ICastCard }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-[400px] relative">
        <Image
          src={
            cast?.profile_path
              ? `${IMAGE_URL}${cast?.profile_path}`
              : `${NO_IMAGE_URL}`
          }
          alt={cast?.name}
          fill={true}
        />
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <h2 className="text-lg font-medium"><b>Name:</b> {cast?.name}</h2>
        <h2 className="text-lg font-medium"><b>Character:</b> {cast?.character}</h2>
      </div>
    </div>
  );
};

export default CastCard;
