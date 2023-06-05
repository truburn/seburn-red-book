import { DefaultTheme } from "react-jss";
import { Mixins, colorOpacity, createStyles } from "theme";

export const appClasses = createStyles("App", (theme: DefaultTheme) => ({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    background: theme.color.primary.main,
    color: theme.color.primary.contrast,
    padding: Mixins.spacing({
      vertical: theme.spacing.thin,
      horizontal: theme.spacing.small,
    }),
    fontSize: "1.5rem",
    "& a": {
      color: "inherit",
    },
    boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.75)",
    zIndex: 1,
  },
  headerIcon: {
    margin: Mixins.spacing({ right: theme.spacing.thin }),
    opacity: 0.75,
    fontSize: "1.75rem",
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
    ...Mixins.linedPaper(),
    zIndex: 0,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    background: theme.color.background.light,
    color: colorOpacity(theme.color.background.contrast, 0.5),
    padding: Mixins.spacing({
      vertical: theme.spacing.thin,
      horizontal: theme.spacing.small,
    }),
    boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.75)",
    "& > svg": {
      margin: Mixins.spacing({ right: theme.spacing.thin }),
      opacity: 0.75,
    },
    zIndex: 1,
  },
}));
