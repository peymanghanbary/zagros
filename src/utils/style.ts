import { Dimensions, StyleSheet } from "react-native";

const {width,height}=Dimensions.get('screen')
//const statusbarH = StatusBar.currentHeight;
export const lineHeights = {
  itemTitle: 21,
};
export const dimensions = {
  w: width>508?508:width,
  h: height,
};

export const colors = {
  rose500: "#f43f5e",
  primary: "#4FAB5E",
  primary2: "#089aff",
  dark: "#585858",
  logo1: "#0c2d4c",
  logo2: "#1199ff",
  icon: "#585858",
  gray: "#78716c",
  star: "gold",
  black: "#000",
  white: "#fff",
  marker: "#cc0001",
  red: "#ef4056",
  btn: "#4FAB5E",
  btnRed: "#E22A38",
  warning300: "#fdba74",
  violet300: "#c4b5fd",
  background:"#f8f8ff",
};

export const shadow={
  S0:"rgba(149, 157, 165, 0.2) 0px 8px 24px",
  S1:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  S2:"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
  S3:"rgba(0, 0, 0, 0.35) 0px 5px 15px",
  S4:"rgba(0, 0, 0, 0.16) 0px 1px 4px",
  S5:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
  S6:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  S7:"rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
  S8:"rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
  S9:"rgba(0, 0, 0, 0.09) 0px 3px 12px",
  S10:"rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
  S11:"rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
  S12:"rgba(17, 17, 26, 0.1) 0px 1px 0px",
  S13:"rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
  S14:"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
  S15:"rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset",
  S16:"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
  S17:"rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
}

export const fonts = {
  BOLD: "irsb",
  BOLD_EN: "irseb",
  EN: "irse",
  REGULARE: "irs",
  MEDIUM: "irsm",
  LIGHT: "irsl",
  BOLDLIGHT: "irsbl",
  ULTRA: "irsu",
};

export const heights = {
  bottomtabnavigation: 70,
};

export const paddings = {
  screen: 15,
};

export const style = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.04,
    shadowRadius: 6.5,
    elevation: 1,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingRight: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    textAlign: "right",
    fontFamily: "IranSansBold",
  },
  caption: {
    fontSize: 13,
    lineHeight: 20,
    textAlign: "right",
    fontFamily: "IranSans",
  },
  walletTitle: {
    fontSize: 13,
    lineHeight: 20,
    textAlign: "right",
    fontFamily: "IranSansBold",
  },
  wallet: {
    fontSize: 12,
    lineHeight: 20,
    textAlign: "right",
    fontFamily: "IranSansBold",
    color: "#22c55e",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  noInputPadding: {
    paddingRight: 0,
    paddingLeft: 0,
    paddingBottom: 0,
    paddingTop: 0,
  },
  iosScaleX: {
    transform: [{ scaleX: -1 }],
  },
  iosScaleY: {
    transform: [{ scaleY: -1 }],
  },
  inputTouchableOverlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,
  },
  circleIcon: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    color: colors.dark,
    justifyContent: "center",
    alignItems: "center",
  },
});