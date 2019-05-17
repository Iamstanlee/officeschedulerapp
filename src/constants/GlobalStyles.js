import { Dimensions, Platform } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const { width, height } = Dimensions.get("window");

const Colors = new (function colors() {
    this.blue = "#329afc";
    this.black = "#000000";
    this.white = "#FFFFFF";
    this.gray = "#BFC5D2";
    this.red = "#ff0000";
    this.orange = "#ff8a00";
    this.lightgray = "#b3bfd0";
    this.darkgray = "#8795a8";
    this.headerTitle = "#000";
    this.selectedCalDateBackground = this.blue;
    this.markedCalDateBorder = "#45a5ff";
    this.unSelectedCalDateBackground = "#d0e8ff";
    this.listRowSpacer = "#d0d4d9";
    this.mainBackground = "#f5f7f9";
    this.trackColorFalse = "#eeeeee";
})();

// alt blue: 329afc, 3aa4fa

const App = {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    headerHeight:
        Platform.select({
            android: 56,
            default: 44
        }) + getStatusBarHeight()
};

const Window = {
    width,
    height
};

const Sizes = {
    font: 15,
    h1: 48,
    h2: 34,
    h3: 28,
    h4: 22,
    paragraph: 15,
    caption: 13,
    captionMedium: 12
};

const Fonts = {
    baseFont: "SanFranciscoDisplay-Regular"
};

const GlobalStyles = {
    iconChevron: {
        width: 8,
        height: 14
    },
    iconCheckbox: {
        width: 16,
        height: 16
    }
};

const StyleFonts = {
    h1: {
        fontSize: Sizes.h1,
        color: Colors.black,
        letterSpacing: -0.6,
        lineHeight: 57
    },
    h2: {
        fontSize: Sizes.h2,
        color: Colors.black,
        letterSpacing: 0,
        lineHeight: 32
    },
    h3: {
        fontSize: Sizes.h3,
        color: Colors.black,
        letterSpacing: 0,
        lineHeight: 32
    },
    h4: {
        fontSize: Sizes.h4,
        color: Colors.black,
        letterSpacing: 0,
        lineHeight: 22
    },
    paragraph: {
        fontSize: Sizes.paragraph,
        color: Colors.black,
        letterSpacing: 0,
        lineHeight: 20
    },
    paragraphGray: {
        fontSize: Sizes.paragraph,
        color: Colors.gray,
        letterSpacing: 0,
        lineHeight: 22
    },
    paragraphGray2: {
        fontSize: Sizes.paragraph,
        color: Colors.gray2,
        letterSpacing: 0,
        lineHeight: 22
    }
};

export { App, Colors, Sizes, StyleFonts, Fonts, Window, GlobalStyles };

/*
Green colors scheme:
this.selectedCalDateBackground = '#83c57c';
this.markedCalDateBorder = '#83c57c';
this.unSelectedCalDateBackground = '#e1f2df';
*/
