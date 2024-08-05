import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import HappyLunchbot from "../assets/happy_lunchbot.png";
import { PropsWithChildren } from "react";

type PrimaryProps = PropsWithChildren<{
  canGoBack?: boolean;
}>;

export const Primary = ({ children, canGoBack }: PrimaryProps) => (
  <div className="h-screen w-screen bg-background">
    <div className="max-w-4xl mx-auto pt-2">
      <div className="h-8">
        {canGoBack && (
          <button
            onClick={() => {
              window.history.back();
            }}
            className="flex items-center gap-x-2 text-brand ml-4 text-sm"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            <span>Back</span>
          </button>
        )}
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-end gap-x-6">
          <div className="text-4xl text-brand font-medium ml-4">
            Lunch Developer Documentation
          </div>

          <img
            src={HappyLunchbot}
            alt="Happy Lunchbot"
            className="h-24 mr-10 mb-[-1px] -scale-x-100"
          />
        </div>

        <div className="bg-brand rounded-md h-6"></div>
      </div>

      <div className="mt-2">{children}</div>
    </div>
  </div>
);
