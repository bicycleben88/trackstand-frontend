let green = '#133a34';
let black = '#03070c';
let grey = '#9c9c9c';
export let white = '#f7f7f7';
let clear = 'rgba(0, 0, 0, 0)';
let red = '#ff0000';

// type
let headingFont = 'Apple SD Gothic Neo';
let bodyFont = 'Karla, sans-serif';
let globalPaddingHorizontal = 5;
let globalPaddingVertical = 10;

export const globalStyles = {
  danger: red,
  textColor: black,
  lineColor: grey,
  h1: 50,
  h2: 40,
  h3: 35,
  h4: 30,
  h5: 20,
  baseFontSize: 17,
  baseLineHeight: 23,
  headerTextFont: headingFont,
};

export const formStyles = {
  borderColor: 'black',
  height: 40,
  margin: 12,
  borderWidth: 2.5,
  padding: 10,
  borderTopColor: clear,
  borderRightColor: clear,
  borderRadius: 15,
  textAlign: 'center',
  color: white,
};

export const containerStyles = {
  backgroundColor: green,
  paddingHorizontal: globalPaddingHorizontal,
  paddingVertical: globalPaddingVertical,
  height: '100%',
  justifyContent: 'center',
};
