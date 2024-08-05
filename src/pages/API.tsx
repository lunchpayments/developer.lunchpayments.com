import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { Primary } from "../layouts/Primary";

export const API = () => (
  <Primary>
    <SwaggerUI url="/swagger/openapi.yaml" />
  </Primary>
);
