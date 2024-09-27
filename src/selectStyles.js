export default {
    control: (styles, { isFocused }) => ({
      ...styles,
      height: "auto",
      minHeight: 50,
      background: "var(--bg-secondary)",
      border: "solid 2px var(--border-primary)",
      borderColor: isFocused
        ? "var(--primary) !important"
        : "transparent !important",
      borderRadius: 10,
      outline: 0,
      boxShadow: "none",
      cursor: "text",
      "&:hover": {
        boxShadow: "none",
      },
    }),
    singleValue: (styles) => {
      return {
        ...styles,
        color: "var(--foreground)",
      };
    },
    option: (styles) => {
      return {
        ...styles,
        cursor: "pointer",
        background: "transparent !important",
        borderRadius: 10,
        color: "var(--foreground) !important",
        "&:hover": {
          background: "var(--gradient-1) !important",
          color: "var(--color-white) !important",
        },
      };
    },
    menu: (styles) => {
      return {
        ...styles,
        background: "rgba(var(--bg-secondary-rgb),0.8)",
        "-webkit-backdrop-filter": "blur(50px)",
        backdropFilter: "blur(50px)",
        boxShadow: "0 2px 2px 0px rgba(0, 0, 0, 0.6)",
        borderRadius: 10,
      };
    },
    menuList: (styles) => {
      return {
        ...styles,
        padding: "20px",
        scrollbarWidth: "none",
      };
    },
  };