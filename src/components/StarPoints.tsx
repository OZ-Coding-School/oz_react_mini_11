import Star from "./icons/Star";

interface StarPointsProps {
  point: number; //point out of 10
  className?: string;
}

const STAR_STANDARDS = [1, 2, 3, 4, 5];

export default function StarPoints({ point, className }: StarPointsProps) {
  const stars = point / 2;
  return (
    <div className={`flex items-center justify-end space-x-1 ${className}`}>
      {STAR_STANDARDS.map((standard) => {
        let fillAmount: "full" | "half" | "none";

        if (stars < standard - 0.5) {
          fillAmount = "none";
        } else if (stars < standard) {
          fillAmount = "half";
        } else {
          fillAmount = "full";
        }

        return <Star fillAmount={fillAmount} />;
      })}
    </div>
  );
}
