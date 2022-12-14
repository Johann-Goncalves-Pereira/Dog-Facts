import { defineConfig, loadEnv } from "vite";
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";


export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      legacy({
        targets: ["defaults", "not IE 11"],
      }),
    ],
    server: {
      host: "0.0.0.0",
      port: 3000,
    },
    preview: {
      port: 8080,
    },
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  };
});
