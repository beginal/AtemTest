const sizes = {
  desktop: 1024,
  tablet: 768,
  mobile: 376,
};

const colors = {
  Primary700: "#1565CD",
  Primary500: "#2196F3",
  Gray900: "#323D45",
  Gray600: "#939FA5",
  Warning: "#FFA000",
};

const theme = {
  colors,
  desktop: `(max-width: ${sizes.desktop}px)`,
  tablet: `(max-width: ${sizes.tablet}px)`,
  mobile: `(max-width: ${sizes.mobile}px)`,
};

export default theme;
