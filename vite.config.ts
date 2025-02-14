import vercel from "vite-plugin-vercel";
import ssr from "vike/plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react({}), ssr({
    prerender: true,
  }), vercel()],
});