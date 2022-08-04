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
          fontWeight: "500",
          fontSize: "28px",
          lineHeight: "40px",
        },
      },
      title2: {
        DEFAULT: {
          fontFamily: "Heebo",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "20px",
        },
      },
      body1: {
        DEFAULT: {
          fontFamily: "Heebo",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px",
        },
      },
      body2: {
        DEFAULT: {
          fontFamily: "Heebo",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "12px",
          lineHeight: "16px",
        },
      },
    },
    extend: {},
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
