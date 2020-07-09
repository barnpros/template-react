export const transition = ({
  prop: property = "all",
  speed = "300ms",
  ease = "ease",
  delay = "0ms",
}) => `
    transition: ${property} ${speed} ${ease};
    transition-delay: ${delay};
  `;
