import { StyleSheet } from "aphrodite/no-important";
import { fontFamilyMain, colours, indentWidth } from "../../../global/styles";

export default StyleSheet.create({
  tagline: {
    margin: "5px 0",
    position: "relative",
    fontFamily: fontFamilyMain,
    fontWeight: 400,
    "::after": {
      content: "''",
      width: 100,
      height: 2,
      position: "absolute",
      top: 40,
      left: 0,
      backgroundColor: colours.dark
    }
  },
  pageTitle: {
    width: "90%",
    margin: "2.5em auto"
  },
  indented: {
    width: indentWidth,
    margin: "0 auto"
  },
  link: {
    color: colours.brown_dark,
    ":hover": {
      color: colours.brown_light
    }
  }
});
