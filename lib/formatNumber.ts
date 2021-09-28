export const formatNumber = (input: number) => {
  if (input < 10) {
    return `0${input}`;
  }
  return input;
};
