interface ICardLabelProps {
  labelImage: string;
  labelText: string;
  variant: "price" | "duration";
}

export function CardLabel({
  labelImage,
  labelText,
  variant,
}: ICardLabelProps): JSX.Element {
  const typography =
    variant === "price"
      ? "text-primary-cyan font-semibold"
      : "text-primary-soft-blue font-light";

  return (
    <div className={`flex items-center justify-center gap-2 ${typography}`}>
      <img src={labelImage} alt="" />
      <p>{labelText}</p>
    </div>
  );
}
