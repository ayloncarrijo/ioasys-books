/** @type {import('tailwindcss').Config} */

const handleBreakpoints = (value, consumer = (style) => style) => {
  if (typeof value !== "object" || !("DEFAULT" in value)) {
    return consumer(value);
  }

  return Object.entries(value).reduce(
    (accumulator, [breakpoint, style]) => ({
      ...accumulator,
      ...(breakpoint === "DEFAULT"
        ? consumer(style)
        : { [`@screen ${breakpoint}`]: consumer(style) }),
    }),
    {}
  );
};

module.exports = {
  content: [],
  theme: {
    spacing: {
      0: "0px",
      1: "1px",
      ...Object.fromEntries(
        Array(256)
          .fill(null)
          .map((_, i) => [(i + 1) * 4, `${((i + 1) * 4) / 16}rem`])
      ),
    },
    screens: {
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    container: {
      DEFAULT: {
        maxWidth: 1136,
        padding: "1rem",
      },
    },
    typography: {
      title1: {
        DEFAULT: {
          fontFamily: "Heebo",
          fontStyle: "normal",
          fontSize: "28px",
          lineHeight: "40px",
        },
      },
      title2: {
        DEFAULT: {
          fontFamily: "Heebo",
          fontStyle: "normal",
          fontSize: "14px",
          lineHeight: "20px",
        },
      },
      body1: {
        DEFAULT: {
          fontFamily: "Heebo",
          fontStyle: "normal",
          fontSize: "16px",
          lineHeight: "24px",
        },
      },
      body2: {
        DEFAULT: {
          fontFamily: "Heebo",
          fontStyle: "normal",
          fontSize: "12px",
          lineHeight: "16px",
        },
      },
    },
    colors: {
      white: "#fff",
      black: "#000",
      transparent: "transparent",
      current: "currentColor",
    },
    extend: {
      colors: {
        "lighter-black": "#333333",
        "darker-pink": "#B22E6F",
        "lighter-pink": "#AB2680",
      },
      maxWidth: (theme) => theme("width"),
      maxHeight: (theme) => theme("height"),
      minWidth: (theme) => theme("width"),
      minHeight: (theme) => theme("height"),
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    ({ addComponents, theme }) => {
      const styleName = "typography";

      addComponents(
        Object.entries(theme(styleName)).map(([key, value]) => ({
          [`.${styleName}-${key}`]: handleBreakpoints(value),
        }))
      );
    },
    ({ addComponents, theme }) => {
      const styleName = "container";

      addComponents({
        [`.${styleName}`]: {
          width: "100%",
          minWidth: 0,
          marginLeft: "auto",
          marginRight: "auto",
          ...handleBreakpoints(theme(styleName), ({ maxWidth, padding }) => ({
            maxWidth,
            paddingLeft: padding,
            paddingRight: padding,
          })),
        },
      });
    },
  ],
};
