import { createUseStyles } from "react-jss";

/**
 * Global styles to apply to the entire application
 */
const useGlobalStyles = createUseStyles((theme) => ({
  "@global": {
    body: {
      width: "100vw",
      height: "100vh",
      margin: 0,
      padding: 0,
      fontFamily: theme.font.body.fontFamily,
      fontSize: theme.baseHeight,
      fontWeight: theme.font.body.weight.regular,
      lineHeight: theme.font.body.lineHeight,
      backgroundColor: theme.color.paper.main,
      color: theme.color.text.main,
    },
    "#root": {
      width: "100%",
      height: "100%",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "space-between",
    },
    "a, .textLink": {
      textDecoration: "none",
      color: theme.color.secondary.main,
      "&:hover": {
        color: theme.color.primary.main,
      },
    },
    p: {
      padding: 0,
      margin: 0,
      marginBottom: theme.spacing.medium,
    },
    "button, input, select, textarea": {
      fontFamily: theme.font.info.fontFamily,
    },
  },
}));

export const GlobalStyles = () => {
  useGlobalStyles();
  return <></>;
};
