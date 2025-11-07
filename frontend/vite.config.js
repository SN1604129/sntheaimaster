import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load both root and frontend .env files
  const env = loadEnv(mode, process.cwd(), "");
  dotenv.config({ path: "../.env" });

  return {
    plugins: [react()],
    define: {
      "process.env": env,
    },
  };
});
