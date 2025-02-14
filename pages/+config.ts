import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Head from "../layouts/HeadDefault.js";
import Layout from "../layouts/LayoutDefault.js";

// Default config (can be overridden by pages)
export default {
  Layout,
  Head,

  passToClient: ["user"],
  // <title>
  title: "ComfyTyper",
  extends: vikeReact,
} satisfies Config;
