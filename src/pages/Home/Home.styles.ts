import { DefaultTheme } from "react-jss";
import { createStyles, Mixins } from "theme";

export const homeClasses = createStyles("Home", (theme: DefaultTheme) => ({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  navLink: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.75rem",
    padding: Mixins.spacing({ vertical: "1rem", horizontal: "2rem" }),
    margin: Mixins.spacing({ all: "2rem" }),
    transition: "ease all 0.5s",
    color: theme.color.primary.main,
    ...Mixins.pencilBorder(),
    "& .link-text": {
      textAlign: "center",
    },
    "&:hover": {
      background: theme.color.primary.main,
      color: theme.color.primary.contrast,
      borderColor: theme.color.primary.main,
    },
  },
  icon: {
    fontSize: "1.5em",
    margin: Mixins.spacing({ bottom: "0.5em" }),
  },
}));
