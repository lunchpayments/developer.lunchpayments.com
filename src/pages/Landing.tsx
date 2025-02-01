import { CloudIcon } from "@heroicons/react/24/outline";
import { createElement } from "react";
import { useNavigate } from "react-router-dom";
import { Primary } from "../layouts/Primary";

const links = [
  {
    title: "Legacy B2B API Reference",
    description:
      "Legacy B2B API reference for vendors who are still using the legacy API.",
    href: "/api/legacy",
    icon: CloudIcon,
  },
  {
    title: "API Reference",
    description:
      "Onboard vendors, create invoices and make payments with Lunch's powerful API integration.",
    href: "/api/v1",
    icon: CloudIcon,
  },
  /*  {
    title: "Embedded Integration",
    description:
      "Embed the Lunch payment flow into your app with minimal code & integration time.",
    href: "/embedded/gpn",
    icon: CodeBracketIcon,
  }, */
];

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <Primary skipHomeButton>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6 pt-2 lg:pt-4">
        {links.map((link) => (
          <button
            onClick={() => {
              navigate(link.href);
            }}
            className="flex flex-col gap-y-2 group items-center border-brand bg-brand border-4 rounded-lg p-4 hover:bg-brand/20"
          >
            {createElement(link.icon, {
              className: "h-24 w-24 text-white group-hover:text-brand",
            })}

            <div className="text-center text-2xl text-white group-hover:text-brand">
              {link.title}
            </div>

            <div className="text-center text-sm px-2 lg:px-10 text-white/80 group-hover:text-brand">
              {link.description}
            </div>

            <div className="text-center pt-2 text-sm px-2 lg:px-10 text-white font-bold group-hover:text-brand">
              Get Started Now »
            </div>
          </button>
        ))}
      </div>
    </Primary>
  );
};
