import Lottie from "lottie-react";
import animationData from "../public/animation.json";
// import animationData from "../public/code-empty-animation.json";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-80 w-80">
        <Lottie animationData={animationData} />
      </div>
      <p className="text-muted-foreground  text-sm text-center">{label}</p>
    </div>
  );
};

