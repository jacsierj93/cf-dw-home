module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {desktop: {min: "1280px"}, tablet: { max: "1050px" }, mobile: { max: "550px" }},
    extend: {
      colors: {
        black: {
          900: "#010101",
          "900_7f": "#0c0c0c7f",
          "900_3f": "#0000003f",
          "900_01": "#101010",
          "900_02": "#0c0c0c",
        },
        red: {
          400: "#e4533f",
          500: "#e44b3f",
          600: "#e6273d",
          "500_01": "#e44c3d",
          "400_02": "#e36140",
          "400_01": "#e35a40",
          "400_04": "#e4533d",
          "400_03": "#e26840",
          "400_06": "#e3623e",
          "400_05": "#e35b3e",
          "600_04": "#e6293b",
          "600_03": "#e5433e",
          "600_02": "#e53a3e",
          "600_01": "#e6323e",
          "600_07": "#e5433d",
          "600_06": "#e53b3c",
          "600_05": "#e6333c",
        },
        indigo: { A100: "#9381ff", A100_3f: "#9381ff3f" },
        lime: {
          600: "#dab431",
          "600_14": "#d5c821",
          "600_15": "#d4cc1d",
          "600_12": "#d7c028",
          "600_13": "#d6c425",
          "600_10": "#d9b82d",
          "600_11": "#d8bc2b",
          "600_16": "#d3d017",
          "600_17": "#d2d310",
          "600_03": "#d7c029",
          "600_04": "#d6c426",
          "600_01": "#d9b82f",
          "600_02": "#d8bc2c",
          A700: "#d2d700",
          A700_9e: "#d2d7009e",
          "600_09": "#dab430",
          "600_07": "#d3d018",
          "600_08": "#d2d311",
          "600_05": "#d5c822",
          "600_06": "#d4cc1e",
          A700_01: "#d1d706",
        },
        deep_orange: {
          400: "#e1753f",
          700: "#e73a1e",
          A200: "#e26e40",
          A200_01: "#e2683e",
          A200_03: "#e1753d",
          A200_02: "#e26f3e",
          "400_01": "#e17b3f",
          "400_02": "#e0803e",
          "400_05": "#e17b3d",
          "400_06": "#e0813c",
          "400_03": "#e0863e",
          "400_04": "#df8c3d",
          "400_07": "#e0863c",
          "400_08": "#df8c3b",
          A400: "#fc2f00",
          A400_3f: "#fc2f003f",
          A400_7f: "#fc2f007f",
          A400_00: "#fc2f0000",
        },
        yellow: {
          800: "#de973b",
          "800_08": "#dd9c38",
          "800_09": "#dda137",
          "800_06": "#df923a",
          "800_07": "#de9739",
          "800_04": "#dbab35",
          "800_05": "#dbaf33",
          "800_02": "#dda138",
          "800_03": "#dca637",
          "800_01": "#dd9c3a",
          "800_11": "#dbab34",
          "800_12": "#dbaf32",
          "800_10": "#dca635",
        },
        orange: { A200: "#df913c" },
        blue_gray: { 300: "#98a1b2" },
        white: { A700_bf: "#ffffffbf", A700: "#ffffff" },
        gray: {
          50: "#fafafa",
          900: "#111111",
          "900_01": "#191d23",
          "900_7f": "#1111117f",
          200: "#ececec",
          300: "#ddeedd",
          500: "#ae6d86",
          "900_0c": "#1122110c",
          "200_01": "#e7e7e7",
          "50_7f": "#fafafa7f",
          "50_01": "#fbfcfc",
          "900_bf": "#111111bf",
          "300_71": "#ddeedd25",
          "50_71": "#fbfcfc71",
          "50_fa": "#fafafafa",
        },
        deep_purple: { 300: "#8f78ae" },
      },
      fontFamily: {
        clashdisplayvariable: "Clash Display Variable",
        inter: "Inter",
        clashgroteskvariable: "Clash Grotesk Variable",
        tanker: "Tanker",
        montserrat: "Montserrat",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#fc2f00,#fc2f0000)",
        gradient1: "linear-gradient(180deg ,#ffffffbf,#ffffffbf)",
        gradient2: "linear-gradient(180deg ,#9381FF,rgba(252, 47, 0, 0.25) 100%)",
        gradient3: "linear-gradient(180deg ,#111111,#9381ff3f)",
        gradient4: "linear-gradient(180deg ,#fc2f007f,#fc2f0000)",
        gradient5: "linear-gradient(180deg, rgba(255, 255, 255, 0.75) 54.69%, rgba(255, 255, 255, 0.00) 100%)",
        gradient6: "linear-gradient(180deg, rgba(252, 47, 0, 0.25) 9.90%, #9381FF 86.46%)",
        gradient7: "linear-gradient(180deg, rgba(250, 18, 54, 0.75) 9.90%, #9381FF 86.46%)"
      },
      transitionProperty: {
          height: 'height'
      },
      spacing: {
        'overflow': '170%',
      }
    },
    boxShadow: {
      bs2: "0px 2px  4px 0px #0857cb26",
      bs: "0px 3px  4px 0px #0857cb26",
      bs1: "0px 2px  3px 0px #0000003f",
      bs3: "0px 4px  16px 0px #1122110c",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
