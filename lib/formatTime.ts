/* eslint-disable radix */
export const formatTime = (time: number, label: string) => {
  let formatedTime = time.toString();
  if (time === 0) {
    return label;
  }
  if (time < 10) {
    formatedTime = `0${time}`;
  }
  return parseInt(formatedTime);
};
