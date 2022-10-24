interface ICardProfileProps {
  profileImage: string;
  creatorName: string;
}

export function CardProfile({
  profileImage,
  creatorName,
}: ICardProfileProps): JSX.Element {
  return (
    <div className="flex items-center justify-start gap-4 font-light">
      <div className="w-8 h-8 rounded-full border border-white overflow-hidden">
        <img
          src={profileImage}
          alt={`Photo of ${creatorName}`}
          className="object-cover w-full h-full"
        />
      </div>
      <p className="text-primary-soft-blue">
        Creation of <span className="text-white">{creatorName}</span>
      </p>
    </div>
  );
}
