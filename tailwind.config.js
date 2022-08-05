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
        maxWidth: 1168,
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
        gray: "#999999",
        "lighter-black": "#333333",
        "darker-pink": "#B22E6F",
        "lighter-pink": "#AB2680",
      },
      boxShadow: {
        card: "0px 6px 24px rgba(84, 16, 95, 0.13)",
        "card-hover": "0px 16px 80px rgba(84, 16, 95, 0.32)",
      },
      dropShadow: {
        book: "0px 6px 9px rgba(0, 0, 0, 0.15)",
      },
      maxWidth: (theme) => theme("width"),
      maxHeight: (theme) => theme("height"),
      minWidth: (theme) => theme("width"),
      minHeight: (theme) => theme("height"),
      gridTemplateColumns: (theme) =>
        Object.fromEntries(
          Object.entries(theme("width"))
            .map(([key, value]) => [
              [`auto-fit-${key}`, `repeat(auto-fit, minmax(${value}, 1fr))`],
              [`auto-fill-${key}`, `repeat(auto-fill, minmax(${value}, 1fr))`],
            ])
            .flat()
        ),
      gridTemplateRows: (theme) =>
        Object.fromEntries(
          Object.entries(theme("height"))
            .map(([key, value]) => [
              [`auto-fit-${key}`, `repeat(auto-fit, minmax(${value}, 1fr))`],
              [`auto-fill-${key}`, `repeat(auto-fill, minmax(${value}, 1fr))`],
            ])
            .flat()
        ),
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
    require("@tailwindcss/line-clamp"),
  ],
};
