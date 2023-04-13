import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./composables/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./App.{js,ts,vue}",
    "./app.{js,ts,vue}",
    "./Error.{js,ts,vue}",
    "./error.{js,ts,vue}",
    "./content/**/*.md",
  ],
  theme: {
    screens: {
      "4xl": "1920px",
    },
    extend: {
      colors: {
        primary: "#02C652",
        primarydark: "#04933E",
        primarylight: "#02C65240",
        zircon: "#EEF0F1",
        "white-smoke": "#EBEBEB",
        gainsboro: "#D9D9D9",
        "athens-gray": "#F3F4F6",
        alto: "#DDDDDD",
        "dove-gray": "#717171",
        "cod-gray": "#1C1B1B",
        "mischka": "#D1D5DB",
      },
      fontFamily: {
        sans: ["Inter", defaultTheme.fontFamily.sans],
      },
      width: {
        "60%": "60%",
        "5px": "5px"
      },
      height: {
        "70px": "70px"
      },
      maxWidth: {
        "4xl": "1920px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      padding: {
        "3%": "3%",
        "7%": "7%",
      },
      boxShadow: {
        sm: "0px 4px 6px rgba(0, 0, 0, 0.04)",
        md: "0px 8px 8px rgba(0, 0, 0, 0.08)",
        lg: "0px 4px 6px rgba(0, 0, 0, 0.15)",
        xl: "0px 14px 43px rgba(0, 0, 0, 0.12), 0px 1.75302px 29.8928px rgba(0, 0, 0, 0.06)",
        "2xl":
          "0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)",
      },
      borderWidth: {
        "1": "1px",
      },
    },
  }
};
