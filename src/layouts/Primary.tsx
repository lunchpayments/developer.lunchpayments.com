import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import HappyLunchbot from "../assets/happy_lunchbot.png";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

type PrimaryProps = PropsWithChildren<{
  skipHomeButton?: boolean;
}>;

export const Primary = ({ children, skipHomeButton }: PrimaryProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen bg-background">
      <div className="max-w-4xl mx-auto pt-2 lg:px-0 px-4">
        <div className="h-8">
          {!skipHomeButton && (
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-x-2 text-brand ml-4 text-sm"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              <span>Home</span>
            </button>
          )}
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-end gap-x-2 lg:gap-x-6">
            <div className="text-lg lg:text-4xl text-brand font-medium ml-4">
              Lunch Developer Documentation
            </div>

            <img
              src={HappyLunchbot}
              alt="Happy Lunchbot"
              className="h-12 lg:h-24 mr-2 lg:mr-10 mb-[-1px] -scale-x-100"
            />
          </div>

          <div className="bg-brand rounded-md h-6"></div>
        </div>

        <div className="lg:mt-2 pb-4">{children}</div>
      </div>
    </div>
  );
};
