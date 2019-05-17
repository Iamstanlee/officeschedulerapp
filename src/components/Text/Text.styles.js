import { StyleSheet } from 'react-native';
import * as Theme from '../../constants/GlobalStyles';

const styles = StyleSheet.create({
  text: {
    fontFamily: Theme.Fonts.baseFont,
    fontWeight: '400',
    fontSize: Theme.Sizes.font,
    color: Theme.Colors.black,
  },
  bold: { fontWeight: '500' },
  light: { fontWeight: '300' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
  blue: { color: Theme.Colors.blue, },
  black: { color: Theme.Colors.black, },
  black2: { color: Theme.Colors.black2, },
  black3: { color: Theme.Colors.black3, },
  white: { color: Theme.Colors.white, },
  gray: { color: Theme.Colors.gray, },
  gray2: { color: Theme.Colors.gray2, },
  gray3: { color: Theme.Colors.gray3, },
  caption: { color: Theme.Colors.caption, },
  h1: Theme.StyleFonts.h1,
  h2: Theme.StyleFonts.h2,
  h3: Theme.StyleFonts.h3,
  h4: Theme.StyleFonts.h4,
  paragraph: Theme.Fonts.paragraph,
  paragraphGray: Theme.Fonts.paragraphGray,
  paragraphGray2: Theme.Fonts.paragraphGray2
});

export default styles;
