/**
 * Generic Colors
 *
 * These colors should only be used in experimentation and design. Named colors are used in final designs.
 * Colors are pulled from the Tailwind CSS palette.
 */
export const transparent = "transparent";
export const black = "#000";
export const white = "#fff";
export const gray = {
  100: "#f7fafc",
  200: "#edf2f7",
  300: "#e2e8f0",
  400: "#cbd5e0",
  500: "#a0aec0",
  600: "#718096",
  700: "#4a5568",
  800: "#2d3748",
  900: "#1a202c",
};
export const red = {
  100: "#fff5f5",
  200: "#fed7d7",
  300: "#feb2b2",
  400: "#fc8181",
  500: "#f56565",
  600: "#e53e3e",
  700: "#c53030",
  800: "#9b2c2c",
  900: "#742a2a",
};
export const orange = {
  100: "#fffaf0",
  200: "#feebc8",
  300: "#fbd38d",
  400: "#f6ad55",
  500: "#ed8936",
  600: "#dd6b20",
  700: "#c05621",
  800: "#9c4221",
  900: "#7b341e",
};
export const yellow = {
  100: "#fffff0",
  200: "#fefcbf",
  300: "#faf089",
  400: "#f6e05e",
  500: "#ecc94b",
  600: "#d69e2e",
  700: "#b7791f",
  800: "#975a16",
  900: "#744210",
};
export const green = {
  100: "#f0fff4",
  200: "#c6f6d5",
  300: "#9ae6b4",
  400: "#68d391",
  500: "#48bb78",
  600: "#38a169",
  700: "#2f855a",
  800: "#276749",
  900: "#22543d",
};
export const teal = {
  100: "#e6fffa",
  200: "#b2f5ea",
  300: "#81e6d9",
  400: "#4fd1c5",
  500: "#38b2ac",
  600: "#319795",
  700: "#2c7a7b",
  800: "#285e61",
  900: "#234e52",
};
export const blue = {
  100: "#ebf8ff",
  200: "#bee3f8",
  300: "#90cdf4",
  400: "#63b3ed",
  500: "#4299e1",
  600: "#3182ce",
  700: "#2b6cb0",
  800: "#2c5282",
  900: "#2a4365",
};
export const indigo = {
  100: "#ebf4ff",
  200: "#c3dafe",
  300: "#a3bffa",
  400: "#7f9cf5",
  500: "#667eea",
  600: "#5a67d8",
  700: "#4c51bf",
  800: "#434190",
  900: "#3c366b",
};
export const purple = {
  100: "#faf5ff",
  200: "#e9d8fd",
  300: "#d6bcfa",
  400: "#b794f4",
  500: "#9f7aea",
  600: "#805ad5",
  700: "#6b46c1",
  800: "#553c9a",
  900: "#44337a",
};
export const pink = {
  100: "#fff5f7",
  200: "#fed7e2",
  300: "#fbb6ce",
  400: "#f687b3",
  500: "#ed64a6",
  600: "#d53f8c",
  700: "#b83280",
  800: "#97266d",
  900: "#702459",
};

/**
 * Barn Pros Brand Colors
 */
export const brand = {
  gray: {
    100: "#ecede2",
    200: "#dcddd3",
    900: "#1d1b17",
  },
  green: {
    100: "#abaa36",
    200: "#92911D",
  },
  transparentBlack: "rgba(30,27,23,.7)",
  white: "#fff",
};

/**
 * Named (Role) Colors
 *
 * Named colors reference generic colors and describe their role in the app. It is expected that multiple
 * named colors will reference the same generic color.
 */
export const role = {
  disabled: {
    background: gray[500],
    text: gray[900],
  },
  error: red[600],
  success: green[600],
  unused: gray[500],
};

export const root = {
  default: {
    background: brand.gray[200],
    text: brand.gray[900],
  },
  footer: {
    background: brand.gray[900],
    text: brand.white,
  },
};

export const button = {
  default: {
    border: brand.green[100],
    background: brand.green[100],
    // Match the button text to the rest of the body
    text: root.default.text,
  },
  primary: {
    hover: {
      background: brand.green[200],
      text: brand.white,
    },
  },
  secondary: {
    border: brand.green[100],
    background: brand.transparentBlack,
    text: brand.white,
    hover: {
      background: brand.green[200],
      border: brand.green[200],
      text: brand.white,
    },
  },
  tertiary: {
    border: transparent,
    background: brand.white,
    hover: {
      background: brand.gray[200],
    },
  },
};

export const card = {
  background: {
    default: brand.transparentBlack,
    error: role.error,
    success: role.success,
  },
  text: {
    default: brand.white,
    modifier: brand.white,
  },
};

export const form = {
  input: {
    background: brand.gray[200],
    text: root.default.text,
  },
};

export const border = root.default.text;
