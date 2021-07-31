import {StyleSheet} from 'react-native';

let green = '#00ebc7';
let red = '#ff5470';
let yellow = '#fde24f';
let black = '#1b2d45';
let darkBlue = '#00214d';
let grey = '#bfbfbf';
let lightGrey = '#f2f4f6';
let white = '#f8f8f1';
let darkGrey = '#222';

// define colors intentions
let primary = green;
let danger = red;
let background = lightGrey;
let textColor = black;
let lineColor = grey;
let cardBg = white;
let headerBackground = darkBlue;
let footerBackground = black;
let buttonTextColor = black;

// style
let line = `1px solid ${lineColor}`;

// elevation
let level1 = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
let level2 =
  '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
let level3 =
  '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
let level4 =
  '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';

// type
let headingFont = 'Rubik, sans-serif';
let bodyFont = 'Karla, sans-serif';
let baseFontSize = 30;
let smallText = '0.8em';

// positioning
let containerPadding = '2.5%';
let headerHeight = '3rem';
let borderRadius = '10px';

let headersStyles = {
  fontFamily: 'Playfair Display',
  margin: '3% 0 1.38%',
  fontWeight: '400',
  lineHeight: 50,
};

let bodyStyles = {
  fontFamily: 'Inter',
  fontWeight: '400',
  lineHeight: 20,
  backgroundColor: background,
  color: textColor,
};

export const globalStyles = {
  h1: 50,
  h2: 40,
  h3: 35,
  h4: 30,
  h5: 25,
  textColor: black,
  baseFontSize: 17,
  baseLineHeight: 23,
  headerTextFont: 'Playfair Display',
};
