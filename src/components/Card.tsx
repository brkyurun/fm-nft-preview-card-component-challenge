import nftImage from "../assets/image-equilibrium.jpg";
import ethereumIcon from "../assets/icon-ethereum.svg";
import clockIcon from "../assets/icon-clock.svg";
import profileImage from "../assets/image-avatar.png";
import { CardLabel } from "./CardLabel";
import { CardProfile } from "./CardProfile";

interface ICardProps {
  nftName: string;
  nftDescription: string;
  nftPrice: string;
  nftTimeLeft: string;
}

export function Card({
  nftName,
  nftDescription,
  nftPrice,
  nftTimeLeft,
}: ICardProps): JSX.Element {
  return (
    <div className="rounded-3xl p-6 bg-card-bg w-[336px]">
      <div className="overflow-hidden rounded-xl h-72 w-72 xl:h-80 ">
        <img
          src={nftImage}
          alt={`Image of the NFT ${nftName}`}
          className="object-cover w-full h-full"
        />
      </div>
      <h1 className="text-2xl text-white font-semibold my-6">{nftName}</h1>
      <p className="text-primary-soft-blue font-light mb-6">{nftDescription}</p>
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-line-color">
        <CardLabel
          labelImage={ethereumIcon}
          labelText={nftPrice}
          variant="price"
        />
        <CardLabel
          labelImage={clockIcon}
          labelText={nftTimeLeft}
          variant="duration"
        />
      </div>
      <CardProfile profileImage={profileImage} creatorName="Jules Wyvern" />
    </div>
  );
}
