import { Link } from "react-router-dom";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export const API = () => (
  <div className="h-screen w-screen">
    <div className="bg-brand py-3">
      <div className="px-[20px] mx-auto max-w-[1460px]">
        <Link to=".." className="text-white font-semibold hover:opacity-75">
          Back
        </Link>
      </div>
    </div>

    <SwaggerUI url="/swagger/openapi.yaml" />
  </div>
);
