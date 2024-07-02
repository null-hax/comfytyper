import type { Config } from "tailwindcss";

export default {
  content: ["./{pages,layouts,components,src}/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      'light-green': '#b7b7a4',
      'green': '#a5a58d',
      'dark-green': '#555A49',
      'white': '#F0EFEB',
      'tan': '#DDBEA9',
      'lighter-tan': '#FFF1E6',
      'light-tan': '#EDDCD2',
      'dark-tan': '#CB997E'
    }
  },
  plugins: [],
} satisfies Config;
