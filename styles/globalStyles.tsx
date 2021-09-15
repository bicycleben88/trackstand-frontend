import {StyleSheet} from 'react-native';

let green = '#00ebc7';
let red = '#ff5470';
let yellow = '#fde24f';
let black = '#1b2d45';
let darkBlue = '#00214d';
let grey = '#bfbfbf';
let lightGrey = '#f5f6f8';
let white = '#f8f8f1';
let darkGrey = '#222';
let clear = 'rgba(0, 0, 0, 0)';

// type
let headingFont = 'Apple SD Gothic Neo';
let bodyFont = 'Karla, sans-serif';

export const globalStyles = {
  // Color Intentions
  headerColor: lightGrey,
  primary: green,
  danger: red,
  background: lightGrey,
  textColor: black,
  lineColor: grey,
  cardBg: white,
  footerBackground: black,
  buttonTextColor: black,
  h1: 50,
  h2: 40,
  h3: 35,
  h4: 30,
  h5: 20,
  baseFontSize: 17,
  baseLineHeight: 23,
  headerTextFont: headingFont,
  headerBackground: darkBlue,
  globalPaddingHorizontal: 5,
  globalPaddingVertical: 10,
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
};
