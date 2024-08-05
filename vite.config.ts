import { defineConfig } from "vite";
import Unfonts from "unplugin-fonts/vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    Unfonts({
      google: {
        families: [
          {
            name: "Outfit",
            styles: "wght@300;400;500;600",
          },
        ],
      },
    }),
  ],
});
