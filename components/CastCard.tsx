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
    <div>
      <div className="h-[400px] relative">
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
        <h2><b>Name:</b> {cast?.name}</h2>
        <h2><b>Character:</b> {cast?.character}</h2>
    </div>
  );
};

export default CastCard;
