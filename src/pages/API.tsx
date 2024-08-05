import { useHref, Link } from "react-router-dom";

export const API = () => {
  const source = useHref("/swagger/index.html").replace("#", "");

  return (
    <div className="h-screen w-screen">
      <div className="bg-brand py-3">
        <div className="px-[20px] mx-auto max-w-[1460px]">
          <Link to=".." className="text-white font-semibold hover:opacity-75">
            Back
          </Link>
        </div>
      </div>

      <iframe src={source} width="100%" height="100%" frameBorder="0"></iframe>
    </div>
  );
};
